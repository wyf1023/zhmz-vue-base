<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6" class="el-col-top-item">
        <el-card class="card-box">
          <template #header>
            <div class="card-title">
              <span>用户信息</span>
            </div>
          </template>
          <el-row :gutter="20">
            <div class="card-box-userinfo">
              <div class="card-box-userinfo-avatar">
                <div>
                  <el-avatar :size="100" />
                </div>
                <div class="card-box-userinfo-avatar-info">
                  <div class="card-box-userinfo-avatar-info-username">
                    管理员
                  </div>
                  <div>安徽省民政厅</div>
                </div>
              </div>
              <div class="card-box-userinfo-logininfo">
                <div>上次登录时间：2022-10-15</div>
              </div>
            </div>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-row :gutter="10" class="el-col-top">
          <el-col :span="12" class="el-col-top-item">
            <el-card shadow="always" class="card-box">
              <template #header>
                <div class="card-title">
                  <span>待办信息</span>
                </div>
              </template>
              <el-table :data="tableData">
                <el-table-column
                  prop="info"
                  label="信息"
                  :show-overflow-tooltip="true"
                  width="310"
                />
                <el-table-column prop="name" label="发送人" align="center" />
                <el-table-column prop="date" label="发送时间" align="center" />
              </el-table>
            </el-card>
          </el-col>
          <el-col :span="12" class="el-col-top-item">
            <el-card shadow="always" class="card-box">
              <template #header>
                <div class="card-title">
                  <span>系统公告</span>
                </div>
              </template>
              <el-table :data="tableData">
                <el-table-column
                  prop="info"
                  label="信息"
                  :show-overflow-tooltip="true"
                  width="310"
                />
                <el-table-column prop="name" label="发送人" align="center" />
                <el-table-column prop="date" label="发送时间" align="center" />
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12" class="el-col-top-item">
        <el-card class="card-box"> </el-card>
      </el-col>
      <el-col :span="12" class="el-col-top-item">
        <el-card class="card-box"> </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12" class="el-col-top-item">
        <el-card class="card-box"> </el-card>
      </el-col>
      <el-col :span="12" class="el-col-top-item">
        <el-card class="card-box"> </el-card>
      </el-col>
    </el-row>
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
</script>

<style lang="less" scoped>
.el-col-top-item {
  min-width: 190px;
}

.card-title {
  text-align: left;
}
.card-box {
  margin-top: 5px;
  height: 290px;
}

/**
  头部用户信息布局
*/
.card-box-userinfo {
  display: flex;
  flex-direction: column;
  flex: 1;

  div {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  .card-box-userinfo-avatar {
    flex: 1;
    flex-direction: row;
    border-bottom: 1px dotted var(--el-border-color);
    padding-bottom: 15px;

    div {
      flex: 1;
      height: 100%;
    }
    .card-box-userinfo-avatar-info {
      height: 75%;
      flex-direction: column;
      font-family: "Microsoft Yahei";
      align-items: flex-start;
      .card-box-userinfo-avatar-info-username {
        color: black;
        align-items: flex-start;
        font-weight: 600;
        font-size: 20px;
      }
    }
  }

  .card-box-userinfo-logininfo {
    height: 80px;
    flex-direction: column;
  }
}
</style>
