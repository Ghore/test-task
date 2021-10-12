<template>
  <div class="container">
    <div class="form__wrapper">
      <form class="form">
        <Success v-if="isValid" />
        <h2 class="form__title">Log in</h2>
        <label class="form__label">
          Name
          <input
            v-model="name"
            :class="{ form__input_err: isErr, form__input: !isErr }"
            type="text"
            name="name"
          />
          <p v-if="isErr" class="form__input_err_text">
            This mail is invalid or has expired
          </p>
        </label>
        <label class="form__label from__label_pass">
          Password
          <input
            v-model="password"
            class="form__input "
            type="password"
            name="password"
            v-show="showPass"
          />
          <input
            v-model="password"
            class="form__input "
            type="text"
            name="password"
            v-show="!showPass"
          />
          <button @click="show" class="form__input_button"></button>
          <p v-if="isErr" class="form__input_err_text">Invalid password</p>
        </label>
        <button @click="login" class="form__btn">sign in</button>
        <a class="form__link" href="#">Forgot your password?</a>
      </form>
    </div>
  </div>
</template>

<script>
import Success from "./Success.vue";
export default {
  name: "Form",
  data() {
    return {
      name: "",
      password: "",
      validName: "admin",
      validPass: "admin123",
      isValid: false,
      isErr: false,
      showPass: false,
    };
  },
  components: {
    Success,
  },
  methods: {
    show(e) {
      e.preventDefault();
      return (this.showPass = !this.showPass);
    },
    login(e) {
      e.preventDefault();
      if (this.name === this.validName && this.password === this.validPass) {
        this.isValid = true;
        this.isErr = false;
      } else {
        this.isErr = true;
        this.isValid = false;
      }
    },
  },
};
</script>

<style lang="css" scoped>
.form {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
@media (max-width: 1199px) {
  .form {
    box-shadow: 0px 2px 11px rgba(28, 27, 27, 0.15);
    border-radius: 4px;
    margin: 0 auto;
    padding-left: 30px;
    width: 430px;
  }
}
@media (min-width: 1200px) {
  .form__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form__title {
    padding-top: 21px;
    padding-bottom: 30px;
  }
}

.form__wrapper {
  margin-top: 52px;
}

.form__title {
  font-family: FuturaDemiC;
  font-size: 35px;
  font-weight: 600;
  line-height: 41px;
  color: #1a1a1a;
}

.form__label {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #8696a1;
  display: flex;
  flex-direction: column;
}

.form__input {
  width: 372px;
  height: 34px;
  border: 0.7px solid #d3d8dd;
  box-sizing: border-box;
  border-radius: 1px;
}

.form__input_err {
  width: 372px;
  height: 34px;
  border: 0.7px solid #e4192e;
  box-sizing: border-box;
  border-radius: 1px;
}
.form__input_err_text {
  font-family: Roboto;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #e4192e;
  padding-top: 10px;
}
.from__label_pass {
  padding-top: 12px;
  position: relative;
}
.form__input_button {
  height: 43px;
  width: 43px;
  background-color: transparent;
  position: absolute;
  top: 26px;
  left: 320px;
  background-image: url("../assets/image/eye.png");
  background-repeat: no-repeat;
  background-position: right;
  -webkit-tap-highlight-color: transparent;
}
@media (min-width: 1200px) {
  .form__input {
    width: 475px;
    height: 43px;
  }
  .form__input_err {
    width: 475px;
    height: 43px;
  }
  .form__input_button {
    top: 30px;
    left: 420px;
  }
}

.form__btn {
  width: 370px;
  padding-top: 12px;
  padding-bottom: 10px;
  background: #fbf315;
  border-radius: 4px;
  font-family: FuturaDemiC;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #2b2d33;
  margin-top: 24px;
}
@media (min-width: 1200px) {
  .form__btn {
    width: 471px;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 16px;
  }
}

.form__link {
  font-family: FuturaMediumC;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #2b2d33;
  opacity: 0.5;
  margin-top: 8px;
  align-self: center;
}
@media (max-width: 1199px) {
  .form__link {
    padding-bottom: 22px;
  }
}
</style>
