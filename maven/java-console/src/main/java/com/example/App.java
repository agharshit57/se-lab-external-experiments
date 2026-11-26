package com.example;

public class App {
    public static void main(String[] args) {
        String name = args.length > 0 ? args[0] : "SE Lab";
        System.out.println("Hello, " + name + "! Maven project is running.");
    }
}
