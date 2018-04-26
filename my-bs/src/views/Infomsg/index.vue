<template>
<div>
    <div class="filter-container" style="padding-bottom:10px;text-align:left;margin-left:30px;">
      <el-select clearable class="filter-item" style="width: 100px" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input  class="filter-item" style="width: 130px" ></el-input>
      <el-button class="filter-item" type="primary"  icon="el-icon-search" >搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;"  type="primary" icon="el-icon-edit">添加</el-button>
    </div>
  <el-table
  v-loading.body="listLoading"
    :data="tableData"
    style="width: 100%">
    <el-table-column align="center"  
      prop="ID"
      label="用户ID"
      min-width="180">
    </el-table-column>
    <el-table-column align="center"
      label="用户名"
      min-width="180">
      <template slot-scope="scope">
          <span class="link-type" >{{scope.row.user_name}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center"
      prop="password"
      label="密码"
      min-width="180">
    </el-table-column>
    <el-table-column align="center"
      prop="permission"
      label="权限"
      min-width="180">
    </el-table-column>
      <el-table-column align="center" label="操作" min-width="180" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini" v-if="status===true" type="primary"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button v-else  size="mini"  type="success" @click="status =!status">完成</el-button>
          <el-button type="danger" size="mini" >删除</el-button>
        </template>
       </el-table-column>
  </el-table>

</div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        listLoading:false,
        alllist:[],
        inputwork:false,
        iswork:false,
        geturl : 'http://127.0.0.1:3000/getper',
        handleurl: 'http://127.0.0.1:3000/gethandle',
        dialogMyqVisible: false,
        status:true, //true创建 false保存
        queindex: '',
        tableData:[],
      listQuery2: [],
      liswork: [],
      checkwork: [],
      Askwork: [],
      options: [{
          value: 'ID',
          label: 'ID'
        },{
          value: 'name',
          label: '用户名'
        },{
          value: 'psm',
          label: '权限'
        }],
        value:''
      }
    },
    components: {  },
    filters: {
    },
    created() {
      this.fetchData(this.geturl)
    },
    methods: {
        handleEdit(index, row) {
          console.log(row)
          this.status = false
          this.temp = Object.assign({}, row) // copy obj

          this.$nextTick(() => {
            //this.$refs['dataForm'].clearValidate()
          })
        },
        fetchData(url) {
        this.listLoading = true
        var self = this
        axios.get(url)
            .then(function(response) {              
              //self.tableData = Object.assign({}, response.data) 
              self.tableData = JSON.parse(JSON.stringify(response.data))
            for(let i=0; i<response.data.length; i++){
            self.tableData.push([{'status':true}])
              //console.log(self.tableData[i])
            }
            self.tableData.push([{'status':true}])
            console.log(self.tableData)
            self.listLoading = false
            }).catch(function(error) {
            console.log(error)
            })
        }
  }
  }
</script>