<template>
  <div class="postulant">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="">
            <!-- Rut -->
            <!-- TODO validar rut -->
            <div class="form-group">
              <label for="rut">Rut</label>
              <input
                type="text"
                class="form-control"
                id="rut"
                placeholder="11.111.111-1"
                v-model="form.rut"
              />
            </div>

            <!-- Nombre del postulante -->
            <div class="form-group">
              <label for="name">Nombre completo</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Jhon Doe"
                v-model="form.name"
              />
            </div>

            <!-- Fecha de nacimiento -->
            <!-- TODO usar librería para seleccionar fechas -->
            <div class="form-group">
              <label for="name">Fecha de nacimiento</label>
              <input
                type="text"
                class="form-control"
                id="birth_date"
                placeholder="19 de mayo de 1995"
                v-model="form.birthDate"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        rut: "",
        name: "",
        birthDate: "",
        career: ""
      }
    };
  },
  methods: {
    submit() {}
  }
};
</script>
