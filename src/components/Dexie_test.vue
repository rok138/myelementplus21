<template>  
  <el-space direction="vertical" alignment="flex-start" :size="5" wrap >
  <span>Books</span>
  <el-button @click="openBooks">openBooks</el-button>
  <el-button @click="addBook">addBook</el-button>
  <el-button @click="updateBook">updateBook</el-button>  
  <el-button @click="bulkUpdateBook">bulkUpdateBook</el-button>    
  <el-button @click="getSciFiBooks">getSciFiBooks</el-button>
  <el-button @click="getSciFiOrRomanceBooks">getSciFiOrRomanceBooks</el-button>
  <el-button @click="complexQuery">complexQuery</el-button>
  <el-button @click="fuheQuery">fuheQuery</el-button>  
  </el-space>
  
  <el-space direction="vertical" alignment="flex-start" :size="5" wrap>
  <span>Friends</span>
  <el-button @click="openFriends">openFriends</el-button>
  <el-button @click="test_get">test_get</el-button>
  <el-button @click="get_all">get_all</el-button>
  
  <el-button @click="addFriends">addFriends</el-button>
  <el-button @click="bulkAddFriends">bulkAddFriends</el-button>   
  <el-button @click="updateFriend">updateFriend</el-button>  
  <el-button @click="bulkPutFriends">bulkPutFriends</el-button> 
  <el-button @click="deleteFriend">deleteFriend</el-button> 
  <el-button @click="bulkDeleteFriend">bulkDeleteFriend</el-button>
  <el-button @click="bulkAddgameSessions">bulkAddgameSessions</el-button>  
  <el-button @click="openUpgradeFriends">openUpgradeFriends</el-button>
  <el-button @click="upgradeFriends">upgradeFriends</el-button>  
  <el-button @click="upgradeFriends2">upgradeFriends2</el-button>      
  <el-button @click="mapToClassTest2">mapToClassTest2</el-button>
  <el-button @click="transaction">transaction</el-button>
  <el-button @click="export_test">export_test</el-button>
  <el-button @click="export_data">export_data</el-button>
  
  
   </el-space>  
  
  <el-space direction="vertical" alignment="flex-start" :size="5" wrap>
  <span>Others</span>
  <el-button @click="getDBVersion">getDBVersion</el-button>
  <el-button @click="getDBTableNames">getDBTableNames</el-button>
  <el-button @click="closeDB">closeDB</el-button>
  <el-button @click="deleteDB">deleteDB</el-button>
  <el-button @click="showStorgeUsage">showStorgeUsage</el-button>
  <el-button @click="test_isStoragePersisted">test_isStoragePersisted</el-button>
  <el-button @click="test_persist">test_persist</el-button>  
  
  </el-space>  
  
  <el-space direction="vertical" alignment="flex-start" :size="5" wrap>
  <span>MyImgDb</span>
  <el-button @click="test_blob">test_blob</el-button>
  </el-space> 
  
  <el-space direction="vertical" alignment="flex-start" :size="5" wrap>
  <span>MyTicketDB</span>
  <el-button @click="CreateAndInitData">CreateAndInitData</el-button>
  </el-space>  
  
  <el-space direction="vertical" alignment="flex-start" :size="5" wrap>
  <span>test</span>
  <el-button @click="test">test</el-button>
  </el-space>
  
  <el-space direction="vertical" alignment="flex-start" :size="5" wrap>
  <span>FriendsDB</span>  
  <el-button @click="Table_defineClass">Table_defineClass</el-button>
  <el-button @click="mapToClassTest">mapToClassTest</el-button>
  </el-space>    
  
  <el-space direction="vertical" alignment="flex-start" :size="5" wrap>
  <span>Friends2</span>
  <el-button @click="test_where">test_where</el-button>  
  <el-button @click="test_toCollection">test_toCollection</el-button>  
  
  </el-space> 
  
</template>
<style>
	
</style>

<script>
import Dexie from 'dexie'
// import {importDB, exportDB, importInto, peakImportFile} from "dexie-export-import";
import {exportDB, peakImportFile} from "dexie-export-import";
// import moment from 'moment'
// import assert from 'assert'
let db;
class Friend {
	log() {
		console.log(JSON.stringify(this));
	}
}
// 仅适用于由Table.get（），Table.toArray（），Table.each（），Collection.toArray（），Collection.each（），Collection.first（），Collection.last（）返回的实例，但不适用于属于筛选查询的回调：Collection.filter（），Collection.and（）和Collection.modify（）或是否正在使用Collection.raw（）。在所有后一种情况下，这些方法将直接从数据库发出普通的javascript对象实例，而无需将其克隆到映射类的实例中。
class Friend2 {
	// Prototype method
	save() {
		return db.friends.put(this); // Will only save own props.
	}
	// Prototype property
	get namef() {
		// return moment(Date.now()).diff (this.birthDate, 'years');
		return this.name +'f'
	}
}

export default {
    data () {
      return {        
      }
    },    
    methods: {
		export0(db) {
		    return db.transaction('r', db.tables, ()=>{
		        return Promise.all(
		            db.tables.map(table => table.toArray()
		                .then(rows => ({table: table.name, rows: rows}))))
		    });
		},		
		import0(data, db) {
		    return db.transaction('rw', db.tables, () => {
		        return Promise.all(data.map (t =>
		            db.table(t.table).clear()
		              .then(()=>db.table(t.table).bulkAdd(t.rows))));
		    });
		},
		async export_data(){
			const data = await this.export0(db)
			console.log(data)
		},
		async export_test(){
			const blob = await exportDB(db);
			console.log(blob)
			const importMeta = await peakImportFile(blob);
			// assert.areEqual(importMeta.formatName, "dexie");
			// assert.isTrue(importMeta.formatVersion === 1);
			console.log("Database name:", importMeta.data.databaseName);
			console.log("Database version:", importMeta.data.databaseVersion);
			console.log("Database version:", importMeta.data.databaseVersion);
			console.log("Tables:", importMeta.data.tables.map(t =>
			  `${t.name} (${t.rowCount} rows)`
			).join('\n\t'));
		},
		// async export_test(){
		// 	const importMeta = await peekImportFile(blob);
		// 	assert.areEqual(importMeta.formatName, "dexie");
		// 	assert.isTrue(importMeta.formatVersion === 1);
		// 	console.log("Database name:", importMeta.data.databaseName);
		// 	console.log("Database version:", importMeta.data.databaseVersion);
		// 	console.log("Database version:", importMeta.data.databaseVersion);
		// 	console.log("Tables:", importMeta.data.tables.map(t =>
		// 	  `${t.name} (${t.rowCount} rows)`
		// 	).join('\n\t'));
		// },
		async  isStoragePersisted() {
		  return await navigator.storage && navigator.storage.persisted ?
		    navigator.storage.persisted() :
		    undefined;
		},
		async  persist() {
		  return await navigator.storage && navigator.storage.persist ?
		    navigator.storage.persist() :
		    undefined;
		},
		async test_isStoragePersisted(){
			const isStoragePersisted = await this.isStoragePersisted()
			console.log("isStoragePersisted:",isStoragePersisted);
		},
		async test_persist(){
			const persist = await this.persist()
			console.log("persist:",persist);
		},
		async  showEstimatedQuota() {
		  return await navigator.storage && navigator.storage.estimate ?
		    navigator.storage.estimate() :
		    undefined;
		},
		async  tryPersistWithoutPromtingUser() {
		  if (!navigator.storage || !navigator.storage.persisted) {
		    return "never";
		  }
		  let persisted = await navigator.storage.persisted();
		  if (persisted) {
		    return "persisted";
		  }
		  if (!navigator.permissions || !navigator.permissions.query) {
		    return "prompt"; // It MAY be successful to prompt. Don't know.
		  }
		  const permission = await navigator.permissions.query({
		    name: "persistent-storage"
		  });
		  if (permission.state === "granted") {
		    persisted = await navigator.storage.persist();
		    if (persisted) {
		      return "persisted";
		    } else {
		      throw new Error("Failed to persist");
		    }
		  }
		  if (permission.state === "prompt") {
		    return "prompt";
		  }
		  return "never";
		},
		async  initStoragePersistence() {
		  const persist = await this.tryPersistWithoutPromtingUser();
		  switch (persist) {
		    case "never":
		      console.log("Not possible to persist storage");
		      break;
		    case "persisted":
		      console.log("Successfully persisted storage silently");
		      break;
		    case "prompt":
		      console.log("Not persisted, but we may prompt user when we want to.");
		      break;
		  }
		},		 
		async test_blob(){
			var db = new Dexie("MyImgDb");
			db.version(1).stores({
			    friends: "name"
			});
			const res = await fetch('https://upload.wikimedia.org/wikipedia/commons/9/98/Pet_dog_fetching_sticks_in_Wales-3April2010.jpg');
			const blob = await res.blob();
			// Store the binary data in indexedDB:
			await db.friends.put({
			    name: "David",
			    image: blob
			});			
		},
		async test(){		
			// await this.initStoragePersistence()
			// console.log("b:",b);
			// db = await new Dexie("Friends2").open();
			// db.version(1).stores({
			//     friends: "++id,name,age,shoeSize"
			// });		
			// db.on("populate", function() {
			//     // Init your DB with some default statuses:
			//     for (let i=1; i<101; i++){
			// 		let s = 'name' +i
			// 		db.friends.add(
			// 			{id: i, name: s, shoeSize: '21',age:i, love:'hello'}						
			// 		)
			// 	}
			// });	
			// db.open()				
			// db.friends
			//   .where('age').above(15)
			//   .offset(10)
			//   .limit(10)
			//   .toArray(function (Key) {
			// 	console.log("toArray:",Key);
			//   });
			// new Dexie('Friends2').open().then(function (db) {
			//     console.log ("Found database: " + db.name);
			//     console.log ("Database version: " + db.verno);
			//     db.tables.forEach(function (table) {
			//         console.log ("Found table: " + table.name);
			//         console.log ("Table Schema: " +
			//             JSON.stringify(table.schema, null, 4));
			//     });
			// })
		},
		async test_where(){
			db = new Dexie("Friends2");
			db.version(1).stores({
			    friends: "++id,name,age,shoeSize"
			});		
			db.on("populate", function() {
			    // Init your DB with some default statuses:
			    for (let i=1; i<101; i++){
					let s = 'name' +i
					db.friends.add(
						{id: i, name: s, shoeSize: '21',age:i, love:'hello'}						
					)
				}
			});	
			db.open()	
			db.friends
			  .where('age').above(15)
			  .offset(10)
			  .limit(10)
			  .toArray(function (friends) {
				console.log(friends.map(JSON.stringify).join('\n'));
			  });
		},
		test_toCollection(){
			db = new Dexie("Friends2");
			db.version(1).stores({
			    friends: "++id,name,age,shoeSize"
			});	
			db.friends.toCollection().count(function (count) {
			    console.log(count + " friends in total");
			});
		},
		async test_get(){				
			console.log("get(1):", await db.friends.get(1));		
			console.log("get(1):", await db.table('friends').get(1));
			console.log("get({name: 'Bar b'}):", await db.friends.get({name: 'Bar b'}))			
		},
		async get_all(){			
			console.log("all:", await db.friends.toArray());
		},
		openBooks(){
			//检查是否支持 indexDB
			if (!('indexedDB' in window)) {
			  console.log('This browser doesn\'t support IndexedDB');
			  return;
			}
			//创建一个数据库 若数据库已存在则为打开
			//打开数据库时，会判断当前version值是否大于已经存在的version值，若大于则会upgrade即升到最高版本
			// 创建新的数据库
			// Declare db instance
			db = new Dexie('books');
			// Define Database Schema
			db.version(1).stores ({	
			  books: 'id, author, name, *categories'
			});
			db.open()	
		},
		addBook(){
			db.books.add({
				id: 3,
				name: 'Under the Dome3', 
				author: 'Stephen King3',
				categories: ['romance3', 'thriller']
			});
		},	
		updateBook(){
			db.books.put({	//put是替换整个对象 update才是只修改某个属性
				id: 1,
				name: 'Under the DomePut', 
				author: 'Stephen King',
				categories: ['sci-fi', 'thriller']
			});			
		},		
		async bulkUpdateBook(){
			let a=[
				{
					id: 3,
					name: 'Under the Dome34', 
					author: 'Stephen King34',
					categories: ['romance34', 'thriller']
				},
				{
					id: 1,
					name: 'Under the Dome1', 
					author: 'Stephen King1',
					categories: ['sci-fi1', 'thriller']
				}
			];
			await db.friends.bulkPut(a);//批量修改，或者
		},
		getSciFiBooks() {
			db.books
			.where('categories').equals('sci-fi')
			.toArray().then(data =>console.log(data))		    						
		},
		// getSciFiBooks0(){
		// 	 return db.books
		// 	 .where('categories').equals('sci-fi')
		// 	 .toArray()		  	
		// },
		// async getSciFiBooks() {
		// 	let res = await this.getSciFiBooks0()		    	
		// 	console.log(res)			
		// },
		// async getSciFiBooks() {
		// 	let res = await db.books
		// 					 .where('categories').equals('sci-fi')
		// 					 .toArray();		    	
		// 	console.log(res)				
		// },
		getSciFiOrRomanceBooks() {
		  return db.books
		    .where('categories').anyOf('sci-fi', 'romance')
		    .distinct() // 筛选掉重复的数据
		    .toArray().then(data =>console.log(data))		
		},
		complexQuery() {
		  return db.books
		    .where('categories').startsWithAnyOfIgnoreCase('sci', 'ro')
		    .or('author').equalsIgnoreCase('stephen king')
		    .distinct()
		    .toArray().then(data =>console.log(data))
		},
		fuheQuery(){
			var db = new Dexie('fuhe');
			db.version(1).stores({
			    people: 'id, [firstName+lastName]'
			});
			db.people.put({
				id: 1,
				firstName: 'Stephen', 
				lastName: 'King'				
			});
			db.people.where({firstName: 'Stephen', lastName: 'King'}).toArray().then(data =>console.log(data))
			// .then(data =>console.log(data))
		},
		openFriends(){
			db = new Dexie('Friends');
			db.version(1).stores({
			    friends: "++id,name,age,*tags",
			    gameSessions: "++id,score"
			});	
			db.open()
		},
		addFriends(){
			db.friends.add({name: "Jose phine2", age: 22});			
		},
		bulkAddFriends(){
			db.friends.bulkAdd([
			  {name: "Foo a", age: 31},
			  {name: "Bar b", age: 32}
			]);
		},
		bulkPutFriends(){
			db.friends.bulkPut([
			  {id:1, name: "Foo a2"}, //这里是覆盖整个原对象
			  {id:2, name: "Bar b2", age: 33}
			]);
		},
		bulkAddgameSessions(){			
			db.gameSessions.bulkAdd([
			  {score: 31},
			  {score: 32}
			]);
		},		
		updateFriend(){
			db.friends.update(2, {name: "Br b3"})			
		},
		deleteFriend(){
			db.friends.delete(4);
			db.friends
			    .where('name').equals("Br b3")
			    .delete();
		},
		bulkDeleteFriend(){
			db.friends.bulkDelete([1,3]);
		},
		transaction(){//事务处理
			db.transaction('rw', db.friends, async ()=>{
			    const friend = await db.friends.get({name: "Bar b22"});
			    ++friend.age;
			    await db.friends.put(friend);			
				const friend2 = await db.friends.get({name: "Foo a22"});
				++friend2.age;
				await db.friends.put(friend2);			
			}).then(() => {
			    console.log("Transaction committed");			
			}).catch(err => {
			    console.error(err.stack);
			});
		},		

		upgradeFriends(){
			// db = new Dexie('Friends');
			db.close()
			db.version(1).stores({
			    friends: "++id,name,age",
			    gameSessions: "++id,score"
			});	
			db.version(2).stores({
			    friends: "++id, name, shoseSize, *tags", // 更改索引
			    gameSessions: "++id,score"		
			})
			db.open()	//要调用一下才会生效		
		},
		
		upgradeFriends2(){			
			db = new Dexie('Friends');
			db.close()
			db.version(1).stores({
			    friends: "++id,name,age",
			    gameSessions: "++id,score"
			});	
			db.version(2).stores({
			    friends: "++id, name, shoseSize, *tags", // 更改索引
			    gameSessions: "++id,score"		
			})			
			db.version(3).stores({
			    friends: "++id, [firstName+lastName], birthDate, *tags", // 更改索引
			    gameSessions: null // Delete 对象仓库			
			}).upgrade(tx => {
			    // 仅当安装了低于2的version时才会执行
				console.log("upgrading...")
			    return tx.table("friends").toCollection().modify(friend => {
			        friend.firstName = friend.name.split(' ')[0];
			        friend.lastName = friend.name.split(' ')[1];
			        friend.birthDate = new Date(new Date().getFullYear() - friend.age, 0);
			        delete friend.name;
			        delete friend.age;
			    });
			});	
			db.open() //要调用一下才会生效，upgrade才会执行
		},
		openUpgradeFriends(){
			db = new Dexie('Friends');
			db.version(2).stores({
			    friends: "++id, [firstName+lastName], yearOfBirth, *tags", // 更改索引
			});	
			db.open()
		},
		getDBTableNames(){
			let tables = db.tables;				
			for(var i = 0;i < tables.length;i++){			  
			  console.log("tables[i].name:",tables[i].name);			  
			}
		},
		getDBVersion(){						
			console.log("db.verno:",db.verno);	
		},
		async showStorgeUsage() {//查询存储容量
		  if (navigator.storage && navigator.storage.estimate) {
		    const estimation = await navigator.storage.estimate();
		    console.log(`Quota: ${estimation.quota}`);
		    console.log(`Usage: ${estimation.usage}`);
		  } else {
		    console.error("StorageManager not found");
		  }
		},
		//删除数据库表
		deleteDB() {
		  Dexie.delete('Friends');		  
		},
		closeDB(){
			db.close()
		},
		CreateAndInitData(){
			db = new Dexie("MyTicketDB");			
			db.version(1).stores({
			    tickets: "++id,headline,description,statusId",
			    statuses: "++id,name,openess"
			});			
			//仅在最初创建数据库的情况下才调用此方法填充初始数据
			db.on("populate", function() {
			    // Init your DB with some default statuses:
			    db.statuses.add({id: 1, name: "opened", openess: true, a:[1,{b:2,c:[2,{d:1}]}]});
			    db.statuses.add({id: 2, name: "closed", openess: false});
			    db.statuses.add({id: 3, name: "resolved", openess: false});
			    db.statuses.add({id: 4, name: "wontfix", openess: false});
			});
			db.open()
		},	
		Table_defineClass(){
			db = new Dexie("FriendsDB");			
			// The stores() method just specify primary key and indexes
			db.version(1).stores({
			    friends: "++id,name,shoeSize"
			});
			db.on("populate", function() {	//初始数据
			    // Init your DB with some default statuses:
			    db.friends.bulkAdd([
					{id: 1, name: "opened1",shoeSize: "21"},
					{id: 2, name: "dpened2",shoeSize: "22"},
					{id: 3, name: "dpened3",shoeSize: "23"},
					{id: 4, name: "opened4",shoeSize: "34"},
				])
			});	
			// When using defineClass(), you may specify
			// non-indexed properties as well and their types
			var Friend = db.friends.defineClass ({
			    name: String,
			    shoeSize: Number,
			    cars: [Car],
			    address: {
			        street: String,
			        city: String,
			        country: String
			    }        
			});			
			function Car() {}			
			Friend.prototype.log = function () {
			    console.log(JSON.stringify(this));
			}			
			db.open();			
			db.friends.where("name").startsWithIgnoreCase("d").each(function(friend) {
			    friend.log();
			}).catch(function (e) {
			    console.error(e);
			});
		},
		mapToClassTest(){
			db = new Dexie("FriendsDB");
			db.version(1).stores({
			    friends: "++id,name,shoeSize"
			});		
			db.on("populate", function() {
			    // Init your DB with some default statuses:
			    db.friends.bulkAdd([
					{id: 1, name: "opened1",shoeSize: "21"},
					{id: 2, name: "dpened2",shoeSize: "22"},
					{id: 3, name: "dpened3",shoeSize: "23"},
					{id: 4, name: "opened4",shoeSize: "34"},
				])
			});	
			db.open()			
			db.friends.mapToClass(Friend);			
			db.friends.where("name").startsWithIgnoreCase("d").each(function(friend) {
			    // assert (friend instanceof Friend);
			    friend.log();
			}).catch(function (e) {
			    console.error(e);
			});
		},
		async mapToClassTest2(){
			let a=[]
			db.friends.mapToClass(Friend2);
			await db.friends.each(function(friend) {
			    // assert (friend instanceof Friend);				
			    console.log("friend.name:",friend);
				console.log("friend.namef:",friend.namef);
				friend.name += "2"
				// friend.save() 在查询里面只能读，不能修改
				a.push(friend)
			}).catch(function (e) {
			    console.error(e);
			});
			await db.friends.bulkPut(a);//批量修改，或者
			// a.forEach(item =>{
			// 	db.friends.put(item)
			// 	console.log(item)
			// 	})			
		},

    }
  }
</script>