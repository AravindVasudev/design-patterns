package io.github.aravindvasudev.Proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

public class ProxyHandler implements InvocationHandler {
    private Object original;

    ProxyHandler(Object original) {
        this.original = original;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("|--- PROXY ---|");
        method.invoke(original, args);
        System.out.println("|--- PROXY ---|");

        return null;
    }
}
