package lib

import (
	"unsafe"

	"golang.org/x/sys/windows"
)

type Screen struct {
	Left   int
	Top    int
	Width  int
	Height int
}

type Device struct {
	Screens []Screen
}

type RECT struct {
	Left, Top, Right, Bottom int32
}

type MONITORINFO struct {
	CbSize    uint32
	RcMonitor RECT
	RcWork    RECT
	DwFlags   uint32
}

var (
	user32              = windows.NewLazyDLL("user32.dll")
	enumDisplayMonitors = user32.NewProc("EnumDisplayMonitors")
	getMonitorInfo      = user32.NewProc("GetMonitorInfoW")
)

func enumMonitorsProc(hMonitor uintptr, hdcMonitor uintptr, lprcMonitor *RECT, dwData uintptr) uintptr {
	var mi MONITORINFO
	mi.CbSize = uint32(unsafe.Sizeof(mi))
	getMonitorInfo.Call(hMonitor, uintptr(unsafe.Pointer(&mi)))

	left := mi.RcMonitor.Left
	top := mi.RcMonitor.Top
	width := mi.RcMonitor.Right - mi.RcMonitor.Left
	height := mi.RcMonitor.Bottom - mi.RcMonitor.Top

	screens := (*[]Screen)(unsafe.Pointer(dwData))
	*screens = append(*screens, Screen{Left: int(left), Top: int(top), Width: int(width), Height: int(height)})

	return 1
}

func getScreens() []Screen {
	var screens []Screen
	enumDisplayMonitors.Call(0, 0, windows.NewCallback(enumMonitorsProc), uintptr(unsafe.Pointer(&screens)))

	return screens
}

func NewDevice() Device {
	return Device{
		Screens: getScreens(),
	}
}
