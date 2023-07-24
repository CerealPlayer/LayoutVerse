package main

import (
	"context"

	"lib"
)

type App struct {
	ctx context.Context
	dvc lib.Device
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	a.dvc = lib.NewDevice()
}

func (a *App) GetScreens() []lib.Screen {
	return a.dvc.Screens
}
