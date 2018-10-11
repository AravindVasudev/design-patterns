package io.github.aravindvasudev.Proxy;

public class Foo implements FooInterface {
    @Override
    public void sayHello() {
        System.out.println("Hello — Foo");
    }

    @Override
    public void sayBye() {
        System.out.println("Bye — Foo");
    }
}
