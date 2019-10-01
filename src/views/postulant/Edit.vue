<template>
  <div class="postulant">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form v-on:submit.prevent="onSubmit">
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
                v-model="form.dateBirth"
              />
            </div>

            <!-- Carrera a la que postula -->
            <div class="form-group">
              <label for="Course">Carrera a la que postula</label>
              <select class="form-control" id="Course" v-model="form.Course">
                <option v-for="(item, index) in Courses" v-bind:key="index">
                  {{ item.name }}
                </option>
              </select>
            </div>

            <!-- Button submit -->
            <div class="form-group">
              <button class="btn btn-primary">Grabar!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Courses: [],
      form: {
        rut: "",
        name: "",
        dateBirth: "",
        Course: ""
      }
    };
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    getCourses() {
      // TODO en un futuro estas carreras deben ser consumidas de algun servicio disponibilizado por le Backend
      this.Courses = [
        { name: "Diseño en Comunicación Visual" },
        { name: "Ingeniería Civil Biomédica" },
        { name: "Ingeniería Civil en Telemática" },
        { name: "Otra" }
      ];
    },
    onSubmit() {
      axios
        .post(`${process.env.VUE_APP_API_URL}/estudiantes/agregar`, {
          name: this.form.name,
          rut: this.form.rut,
          course: this.form.name,
          dateBirth: this.form.dateBirth
        })
        .then(() => {
          console.log("Usuario Agregado");
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
};
</script>
