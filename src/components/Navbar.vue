<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Centre de traitement</el-menu-item>
    <el-submenu index="2">
      <template #title>Lieu de travail</template>
      <el-menu-item index="2-1">item un</el-menu-item>
      <el-menu-item index="2-2">item deux</el-menu-item>
      <el-menu-item index="2-3">item trois</el-menu-item>
      <el-submenu index="2-4">
        <template #title>item quatre</template>
        <el-menu-item index="2-4-1">item un</el-menu-item>
        <el-menu-item index="2-4-2">item deux</el-menu-item>
        <el-menu-item index="2-4-3">item trois</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>Infos</el-menu-item>
    <el-menu-item index="4"
      ><a href="https://www.ele.me" target="_blank">Commandes</a></el-menu-item
    >
  </el-menu>
  <div class="line"></div>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">Centre de traitement</el-menu-item>
    <el-submenu index="2">
      <template #title>Lieu de travail</template>
      <el-menu-item index="2-1">item un</el-menu-item>
      <el-menu-item index="2-2">item deux</el-menu-item>
      <el-menu-item index="2-3">item trois</el-menu-item>
      <el-submenu index="2-4">
        <template #title>item quatre</template>
        <el-menu-item index="2-4-1">item un</el-menu-item>
        <el-menu-item index="2-4-2">item deux</el-menu-item>
        <el-menu-item index="2-4-3">item trois</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4"
      ><a href="https://www.ele.me" target="_blank">Commandes</a></el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style></style>
