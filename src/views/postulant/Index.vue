<template>
  <div class="postulant">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <table class="table table-hover">
            <thead>
              <th>Nombre del postulante</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in postulants" v-bind:key="index">
                <td>{{ item.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postulants: []
    };
  },
  mounted() {
    this.getPostulants();
  },
  methods: {
    getPostulants() {
      // TODO Consumir todos los postulantes desde le backend
      this.postulants = [
        { name: "Jhon Doe" },
        { name: "Rafa maick" },
        { name: "Nicky Jam" },
        { name: "Generic man" }
      ];
    }
  }
};
</script>
