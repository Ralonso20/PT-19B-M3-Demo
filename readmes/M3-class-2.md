# Links utiles
- [Información sobre pipes, union u Or operator](https://www.geeksforgeeks.org/what-does-the-mean-of-pipe-symbol-in-typescript/)

-[Declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)

# Diferencia Types & Interfaces

- Types: Opcion ideal para trabajar con tipos primitivos o complejos, como las uniones e intersecciones.

  ```typescript
  type shirtSize = "S" | "M" | "L";
  ```

  ```typescript
  type TCoordinates = [number, number];
  ```

- Interfaces: Mucho mas adecuadas para definir la estructura de un objeto, si se planea implementar en multiples lugares o necesitamos extender de otros tipos.

  ```typescript
  interface IUser {
    id: number;
    name: string;
    age: number;
  }

  const Iuser: IUser = {
    id: 1,
    name: "John Doe",
    age: 30,
  };
  ```

# Diferencias Clases & Interfaces

Las clases y las interfaces en TypeScript son dos formas de definir contratos para los objetos, pero tienen algunas diferencias clave:

- Implementación de métodos: Las interfaces solo pueden declarar la firma de un método, pero no pueden implementarlo. En cambio, las clases pueden implementar métodos.

```typescript
interface IExample {
  hello(): void; // Solo declaración
}

class Example implements IExample {
  hello() { // Declaración e implementación
    console.log("Hello");
  }
```

- Instanciación: Las clases pueden ser instanciadas, pero las interfaces no pueden. Las interfaces son utilizadas como un tipo que los objetos pueden seguir.

```typescript
class Example {
  hello() {
    console.log("Hello");
  }
}

const example = new Example(); // Esto es válido

interface IExample {
  hello(): void;
}

const iExample = new IExample(); // Esto dará un error
```

- Visibilidad: Las clases pueden tener miembros privados o protegidos, mientras que las interfaces no pueden. Todos los miembros de una interfaz son automáticamente públicos, y no puedes especificar ninguna visibilidad en ellos.
- Extensión y Herencia: Ambas, las clases y las interfaces, pueden extenderse, pero solo las clases pueden implementar herencia real con funcionalidad. Las interfaces solo pueden extenderse para formar nuevas interfaces.

```typescript
interface IParent {
  parentMethod(): void;
}

interface IChild extends IParent {
  childMethod(): void;
}

class Parent {
  parentMethod() {
    console.log("Parent Method");
  }
}

class Child extends Parent {
  childMethod() {
    console.log("Child Method");
  }
}
```

- Propiedades opcionales: Las interfaces pueden tener propiedades opcionales, pero las clases no.

```typescript
interface IExample {
  requiredProp: string;
  optionalProp?: string; // Propiedad opcional
}

class Example {
  requiredProp: string;
  // optionalProp?: string; // Esto dará un error
}
```

En resumen, las interfaces son útiles cuando necesitas definir un contrato para los objetos, pero no necesitas implementar ninguna funcionalidad. Las clases son útiles cuando necesitas implementar funcionalidad específica y/o quieres utilizar características de la programación orientada a objetos como la herencia.
