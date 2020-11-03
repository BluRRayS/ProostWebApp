<template>
  <v-list-item>
    <v-list-item-action>
      <v-switch
        @change="setUseDrinkType"
        v-model="drinkType.IsUsed"
        color="indigo"
      ></v-switch>
    </v-list-item-action>
    <v-list-item-avatar>
      <v-icon>{{ drinkType.icon }}</v-icon>
    </v-list-item-avatar>
    <v-list-item-title>{{ drinkType.name }}</v-list-item-title>
    <v-form v-model="valid" style="display: flex">
      <v-text-field
        v-model="drinkType.minAmount"
        type="number"
        required
        label="min"
        @change="setMinAmount"
        :rules="[
          required('min'),
          largerThanZero('min'),
          smallerOrEqualThanValue('min', 'max', drinkType.maxAmount),
        ]"
      ></v-text-field>
      <v-text-field
        v-model="drinkType.maxAmount"
        type="number"
        required
        label="max"
        @change="setMaxAmount"
        :rules="[
          required('max'),
          largerOrEqualThanValue('max', 'min', drinkType.minAmount),
        ]"
      ></v-text-field>
    </v-form>
  </v-list-item>
</template>

<script>
import validation from "@/utils/validation";
export default {
  name: "GameSettingsForm",
  props: {
    drinkType: {},
    id: {
      required: true,
    },
  },
  data() {
    return {
      valid: true,
      ...validation,
    };
  },
  methods: {
    setUseDrinkType(e) {
      this.$store.commit("setUseDrinkType", {
        id: this.id,
        IsUsed: e,
      });
    },
    setMinAmount(e) {
      if (!this.valid) return;
      this.$store.commit("setMinAmount", {
        id: this.id,
        minAmount: e.target.value,
      });
    },
    setMaxAmount(e) {
      if (!this.valid) return;
      this.$store.commit("setMaxAmount", {
        id: this.id,
        maxAmount: e.target.value,
      });
    },
  },
};
</script>

<style>
</style>