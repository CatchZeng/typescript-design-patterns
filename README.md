# 设计模式 TypeScript 实现

[TypeScript](https://www.typescriptlang.org/) 语言设计模式的实例代码。

## 创建型

- [工厂方法模式 (Factory Method)](./src/factory-method/index.ts)：定义一个**创建对象的接口**，但让**实现这个接口的类**来决定**实例化哪个类**。工厂方法让类的实例化**推迟到子类中进行**。
- [抽象工厂模式 (Abstract Factory)](./src/abstract-factory/index.ts)：为一个**产品族**提供了**统一的创建接口**。当需要这个产品族的某一系列的时候，可以从抽象工厂中选出相应的系列创建一个具体的工厂类，而**无需指定它们的具体类**。
- [创建者/生成器模式 (Builder)](./src/builder/index.ts)：将一个**复杂对象**的**构建**与它的**表示分离**，使得**同样的构建过程**可以创建**不同的表示**。
- [原型模式 (Prototype)](./src/prototype/index.ts)：用原型实例**指定**创建对象的**种类**，并且通过**拷贝**这些原型,创建**新的对象**。
- [单例模式 (Singleton)](./src/singleton/singleton.ts)：确保一个类**只有一个实例**，并提供对该实例的**全局访问**。

## 结构型

- [外观模式 (Facade)](./src/facade/index.ts)：为子系统中的**一组接口**提供一个**一致的界面**，外观模式定义了一个**高层接口**，这个接口使得这一子系统**更加容易使用**。
- [适配器模式 (Adapter/Wrapper/Translator)](./src/adapter/index.ts)：将某个类的接口**转换成客户端期望的**另一个**接口表示**。适配器模式可以**消除由于接口不匹配**所造成的**类兼容性问题**。
- [代理模式 (Proxy)](./src/proxy/index.ts)：为其他对象提供一个**代理**以**控制对这个对象的访问**。
- [组合模式 (Composite)](./src/composite/index.ts)：把多个对象组成**树状结构**来表示**局部**与**整体**，这样用户可以**一样的对待单个对象和对象的组合**。
- [享元模式 (Flyweight)](./src/flyweight/index.ts)：通过**共享**以便有效的支持**大量小颗粒对象**。
- [装饰模式 (Decorator)](./src/decorator/index.ts)：向某个对象**动态地添加更多的功能**。修饰模式是**除类继承**外另一种**扩展功能**的方法。
- [桥模式 (Bridge)](./src/bridge/index.ts)：将一个**抽象与实现解耦**，以便两者可以**独立的变化**。

## 行为型

- [中介者模式 (Mediator)](./src/mediator/index.ts)：包装了**一系列对象相互作用**的方式，使得这些对象**不必相互明显作用**，从而使它们可以**松散偶合**。当**某些对象**之间的**作用**发生**改变**时，**不会立即影响其他的一些对象之间的作用**，保证这些作用可以彼此**独立的变化**。
- [观察者模式 (Observer)](./src/observer/index.ts)：在对象间定义一个**一对多**的联系性，由此**当一个对象改变**了状态，所有其他**相关的对象**会被**通知**并且**自动刷新**。
- [命令模式 (Command)](./src/command/index.ts)：将一个**请求**封装为一个**对象**，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求**日志**，以及支持**可取消**的操作。
- [迭代器模式 (Iterator)](./src/iterator/index.ts)：提供一种方法**顺序访问**一个**聚合对象**中**各个元素**, 而又**不需暴露该对象的内部表示**。
- [模板方法模式 (Template Method)](./src/template-method/index.ts)：模板方法模式准备一个**抽象类**，将**部分逻辑**以**具体方法**及**具体构造子类**的形式实现，然后声明一些**抽象方法**来迫使子类**实现剩余的逻辑**。不同的子类可以以不同的方式实现这些抽象方法，从而对剩余的逻辑有不同的实现。先构建一个**顶级逻辑框架**，而将**逻辑的细节**留给具体的**子类**去实现。
- [策略模式 (Strategy)](./src/strategy/index.ts)：定义一个**算法的系列**，将其各个**分装**，并且使他们**有交互性**。策略模式使得**算法**在用户使用的时候能**独立的改变**。
- [状态模式 (State)](./src/state/index.ts)：让一个对象在其**内部状态**改变的时候，其**行为也随之改变**。状态模式需要对每一个系统可能获取的**状态**创立一个**状态类的子类**。当系统的**状态变化时**，系统便**改变所选的子类**。
- [备忘录模式 (Memento)]()
- [解释器模式 (Interpreter)]()
- [职责链模式 (Chain of Responsibility)]()：为解除请求的**发送者**和**接收者**之间耦合，而使**多个对象都有机会处理这个请求**。将这些对象连成一条链，并沿着这条**链传递**该请求，**直到有一个对象处理它**。
- [访问者模式 (Visitor)]()

## 参考链接

- <https://en.wikipedia.org/wiki/Design_Patterns>
