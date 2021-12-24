# 设计模式 TypeScript 实现

[TypeScript](https://www.typescriptlang.org/) 语言设计模式的实例代码。

## 创建型

- [简单工厂模式（Simple Factory）]()
- [工厂方法模式（Factory Method）](./src/factory-method/index.ts)：定义一个**创建对象的接口**，但让**实现这个接口的类**来决定**实例化哪个类**。工厂方法让类的实例化**推迟到子类中进行**。
- [抽象工厂模式（Abstract Factory）](./src/abstract-factory/index.ts)：为一个**产品族**提供了**统一的创建接口**。当需要这个产品族的某一系列的时候，可以从抽象工厂中选出相应的系列创建一个具体的工厂类，而**无需指定它们的具体类**。
- [创建者模式（Builder）]()
- [原型模式（Prototype）]()
- [单例模式（Singleton）](./src/singleton/singleton.ts)：确保一个类**只有一个实例**，并提供对该实例的**全局访问**。

## 结构型

- [外观模式（Facade）]()
- [适配器模式（Adapter）]()
- [代理模式（Proxy）]()
- [组合模式（Composite）]()
- [享元模式（Flyweight）]()
- [装饰模式（Decorator）]()
- [桥模式（Bridge）]()

## 行为型

- [中介者模式（Mediator）]()
- [观察者模式（Observer）]()
- [命令模式（Command）]()
- [迭代器模式（Iterator）]()
- [模板方法模式（Template Method）]()
- [策略模式（Strategy）]()
- [状态模式（State）]()
- [备忘录模式（Memento）]()
- [解释器模式（Interpreter）]()
- [职责链模式（Chain of Responsibility）]()
- [访问者模式（Visitor）]()
