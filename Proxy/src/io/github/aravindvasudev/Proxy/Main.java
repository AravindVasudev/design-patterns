package io.github.aravindvasudev.Proxy;

import java.lang.reflect.Proxy;

public class Main {
    public static void main(String[] args) {
        FooInterface f = (FooInterface) Proxy.newProxyInstance(ProxyHandler.class.getClassLoader(),
                new Class[]{ FooInterface.class }, new ProxyHandler(new Foo()));

        f.sayHello();
        f.sayBye();
    }
}
