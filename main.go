package main

import (
	"fmt"
	"net/http"
	"openai/web"
)

func main() {
	// css file server
	cssFs := http.FileServer(http.Dir("./css"))
	http.Handle("/css/", http.StripPrefix("/css/", cssFs))
	// js file server
	jsFs := http.FileServer(http.Dir("./js"))
	http.Handle("/js/", http.StripPrefix("/js/", jsFs))

	fmt.Println("test program to use the Openai api by Mathisen")
	fmt.Println("http://localhost:8080")
	// Start the web server
	web.RunWebServer()
}
