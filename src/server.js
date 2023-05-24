import { createServer, Model } from "miragejs";
import { YV, BS, BV, WV, SV, CV } from "./assets";

createServer({
  models: {
    vans: Model,
  },
  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: "100",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iure nostrum libero facilis voluptate quasi nulla beatae obcaecati sed pariatur! ",
      image: YV,
      hostId: "123",
      type: "simple",
    });
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: "80",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iure nostrum libero facilis voluptate quasi nulla beatae obcaecati sed pariatur! ",
      image: CV,
      hostId: "345",
      type: "rugged",
    });

    server.create("van", {
      id: "3",
      name: "Mercedes Sprinter",
      price: "160",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iure nostrum libero facilis voluptate quasi nulla beatae obcaecati sed pariatur! ",
      image: BS,
      hostId: "123",
      type: "luxury",
    });

    server.create("van", {
      id: "4",
      name: "Dream Finder",
      price: "120",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iure nostrum libero facilis voluptate quasi nulla beatae obcaecati sed pariatur! ",
      image: BV,
      hostId: "123",
      type: "luxury",
    });

    server.create("van", {
      id: "5",
      name: "Fiat E-Ulysse",
      price: "170",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iure nostrum libero facilis voluptate quasi nulla beatae obcaecati sed pariatur! ",
      image: SV,
      hostId: "123",
      type: "luxury",
    });

    server.create("van", {
      id: "6",
      name: "Relay Van",
      price: "70",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iure nostrum libero facilis voluptate quasi nulla beatae obcaecati sed pariatur! ",
      image: WV,
      hostId: "567",
      type: "rugged",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/vans", (schema, request) => {
      return schema.vans.all();
    });

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    });

    this.get("/host/vans", (schema, request) => {
      return schema.vans.where({ hostId: "123" });
    });

    this.get("/host/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.where({ id, hostId: "123" });
    });
  },
});
