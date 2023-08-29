class X {
  um(): void {
    console.log("um");
  }
}
class Y extends X {
  dois(): void {
    console.log("dois");
  }

  constructor() {
    super();
  }

  um(): void {
    super.um();
  }
}
class Z extends Y {
    tres(): void {
      console.log("tres");
    }
  
    constructor() {
      super();
    }
  
    dois(): void {
      super.dois();
    }
  }
