<template>    

  <el-button @click="opendb(3)">opendb</el-button>
  <el-button @click="add">add</el-button>
  <el-button @click="read">read</el-button>
  <el-button @click="readAll">readAll</el-button>
  <el-button @click="update">update</el-button>
  <el-button @click="remove">remove</el-button>
  <el-button @click="searchIndex">searchIndex</el-button>  
  <el-button @click="close">close</el-button>
  <el-button @click="getAll">getAll</el-button>
  
  
  
</template>
<style>
	
</style>
<script>
let db;
  export default {
    data () {
      return {
        
      }
    },
    computed: {
      
    },
    methods: {
      opendb(version){		  
		  let request = window.indexedDB.open("test", version);
		  request.onerror = function () {
		    console.log('数据库打开报错');
		  };
		  request.onsuccess = function () {
		    db = request.result;
		    console.log('数据库打开成功');
		  };
		  request.onupgradeneeded = function (event) {
			console.log('onupgradeneeded');
		    db = event.target.result;
			if (!db.objectStoreNames.contains('person')) {
				let objectStore = db.createObjectStore('person', { keyPath: 'id' });
				objectStore.createIndex('name', 'name', { unique: false });
				objectStore.createIndex('email', 'email', { unique: true });
			}		    
		  }
	  },	  
	  add() {
	    let request = db.transaction(['person'], 'readwrite')
	      .objectStore('person')
	      .add({ id: 2, name: '张三2', age: 24, email: 'zhangsan@example.com' });
	  
	    request.onsuccess = function () {
	      console.log('数据写入成功');
	    };
	  
	    request.onerror = function () {
	      console.log('数据写入失败');
	    }
	  },
	  read() {
	     var transaction = db.transaction(['person']);
	     var objectStore = transaction.objectStore('person');
	     var request = objectStore.get(1);
	  
	     request.onerror = function() {
	       console.log('事务失败');
	     };
	  
	     request.onsuccess = function( ) {
	        if (request.result) {
	          console.log('Name: ' + request.result.name);
	          console.log('Age: ' + request.result.age);
	          console.log('Email: ' + request.result.email);
	        } else {
	          console.log('未获得数据记录');
	        }
	     };
	  },
	  readAll() {
	    var objectStore = db.transaction('person').objectStore('person');
	  
	     objectStore.openCursor().onsuccess = function (event) {
	       var cursor = event.target.result;
	  
	       if (cursor) {
	         console.log('Id: ' + cursor.key);
	         console.log('Name: ' + cursor.value.name);
	         console.log('Age: ' + cursor.value.age);
	         console.log('Email: ' + cursor.value.email);
	         cursor.continue();
	      } else {
	        console.log('没有更多数据了！');
	      }
	    };
	  },
	  getAll() {
		  var objectStore = db.transaction('person').objectStore('person');
		  objectStore.getAll().onsuccess = function (event) {
		    var result = event.target.result;		  	  
		    if (result) {		     
		      console.log('result: ' , result);		      
		    } else {
		     console.log('没有更多数据了！');
		    }
		  }		  
	  },
	  update() {
	    var request = db.transaction(['person'], 'readwrite')
	      .objectStore('person')
	      .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' });
	  
	    request.onsuccess = function () {
	      console.log('数据更新成功');
	    };
	  
	    request.onerror = function () {
	      console.log('数据更新失败');
	    }
	  },
	  remove() {
	    var request = db.transaction(['person'], 'readwrite')
	      .objectStore('person')
	      .delete(1);
	  
	    request.onsuccess = function () {
	      console.log('数据删除成功');
	    };
	  },
	  searchIndex(){
		  var transaction = db.transaction(['person'], 'readonly');
		  var store = transaction.objectStore('person');
		  var index = store.index('name');
		  var request = index.get('李四');
		  
		  request.onsuccess = function (e) {
		    var result = e.target.result;
		    if (result) {
		      console.log('李四:',result);
		    } else {
		      console.log('searchName失败');
		    }
		  }
	  },
	  close(){
		  db.close()
		  
	  }

    }
  }
</script>