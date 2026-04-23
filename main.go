package main

import "fmt"

func main () {
    exampleSlice := []string{"Hello"}
    exampleSlice = append(exampleSlice, "World!")
    fmt.Println(exampleSlice)
}