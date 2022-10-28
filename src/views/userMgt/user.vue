<template>
  <div class="container">
    <div class="container-children">
      <div class="handle-box">
        <el-select placeholder="地址" class="handle-select mr10">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input placeholder="用户名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="Search" @click="handleSearch"
          >搜索</el-button
        >
        <el-button type="primary" icon="Plus">新增</el-button>
      </div>
      <el-table :data="tableData" border>
        <el-table-column
          prop="info"
          label="信息"
          :show-overflow-tooltip="true"
          width="310"
        />
        <el-table-column prop="name" label="发送人" align="center" />
        <el-table-column prop="date" label="发送时间" align="center" />
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>
<script setup lang="ts">
const tableData = [
  {
    info: "【待办信息】您好，某某人的低保信息需要您审核，请及时处理",
    name: "Tom",
    date: "2016-05-03",
  },
  {
    info: "【待办信息】您好，某某人的低保信息需要您审核，请及时处理",
    name: "Tom",
    date: "2016-05-03",
  },
  {
    info: "【待办信息】您好，某某人的低保信息需要您审核，请及时处理",
    name: "Tom",
    date: "2016-05-03",
  },
  {
    info: "【待办信息】您好，某某人的低保信息需要您审核，请及时处理",
    name: "Tom",
    date: "2016-05-03",
  },
  {
    info: "【待办信息】您好，某某人的低保信息需要您审核，请及时处理",
    name: "Tom",
    date: "2016-05-03",
  },
];

// 查询操作
const handleSearch = () => {};
</script>
<style lang="less" scoped>
.handle-box {
  margin-bottom: 20px;
  display: flex;
}
.container {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.container-children {
  margin: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
}

.mr10 {
  margin-right: 10px;
}

.el-pagination {
  margin-top: 20px;
}
</style>
