const sinon = require("sinon");
const Comercio = require("../../models/comercio");

describe("Test crear Comercio", function () {
  it("crear instancia de comercio", async function () {
    const comercio = new Comercio({ nombre: "test", direccion: "test" });
    comercio.save();
    expect(comercio.nombre).toBe("test");
    expect(comercio.direccion).toBe("test");
  });
});

describe("Test eliminar Comercio", function () {
  const sandbox = sinon.createSandbox();
  function buildResponse() {
    return httpMocks.createResponse({ eventEmitter: events.EventEmitter });
  }
  beforeEach(() => {
    sandbox.stub(Comercio, "findOneAndRemove").returns({
      _id: "6153d74cea2d3c290d9f1163",
      nombre: "comercio test",
      direccion: "direccion test",
      __v: 0,
    });
    sandbox.stub(Comercio, "findById").returns(null);
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("eliminar instancia de comercio", async function () {
    //instancia actual
    const comercio = new Comercio({ nombre: "test", direccion: "test" });
    comercio.save();
    expect(comercio.nombre).toBe("test");

    //eliminamos la instancia
    Comercio.findByIdAndRemove(comercio.id);

    // validamos que no exista más la instancia
    const comercioEliminado = Comercio.findById(comercio.id);
    expect(comercioEliminado).toBe(null);
  });
});

describe("Test actualizar Comercio", function () {
  const sandbox = sinon.createSandbox();
  function buildResponse() {
    return httpMocks.createResponse({ eventEmitter: events.EventEmitter });
  }
  beforeEach(() => {
    sandbox.stub(Comercio, "findByIdAndUpdate").returns({
      _id: "6153d74cea2d3c290d9f1163",
      nombre: "comercio test actualizado",
      direccion: "direccion test",
      __v: 0,
    });
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("actualizar instancia de comercio", async function () {
    //instancia actual
    const comercio = new Comercio({ nombre: "test", direccion: "test" });
    comercio.save();
    expect(comercio.nombre).toBe("test");

    //actualizamos la instancia
    const comercioActualizado = Comercio.findByIdAndUpdate(
      comercio.id,
      { nombre: "comercio test actualizado" },
      { returnOriginal: false }
    );
    expect(comercioActualizado.nombre).toBe("comercio test actualizado");
  });
});
