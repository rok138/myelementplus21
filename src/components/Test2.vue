<template>
  <el-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data"
  />
  <i class="fab fa-font-awesome fa-3x"></i>
  <el-button @click="$router.push({name:'表单校验'})">router</el-button>
</template>

<script>
// import Utils from '../utils.js'
// import {  ref, onMounted } from 'vue'

export default {
	name:'Test',	
    data() {
        const generateData = () => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                  data.push({
                    value: i,
                    desc: `备选项 ${ i }`,
                    disabled: i % 4 === 0
                  });
                }
                return data;
              };
              return {
                data: generateData(),
                value: []
              };
            },
        
            methods: {
              handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
              }
            }
	
}	
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
   width: 178px;
    height: 178px;
    line-height: 178px;
	border: 1px dashed #19d9d9;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
