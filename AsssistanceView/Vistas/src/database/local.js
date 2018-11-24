/**
 *------------------------------------------------------------------------------------------------------
 * 																									   |
 *                                      CREACION DE LA BASE DE DATOS								   | 
 *      AUTOR:                                       									   |
 *      	         Santiago Gonzalez Acevedo												           |
 *      FECHA:       23 Agosto 2014                                                                    |
 *      DESCRIPCION: Se crea una base de datos, para guardar la informacion necesaria para el          |
 *      			 funcionamiento basico de la aplicacion      									   |
 *      NOM CLASE:   El nombre de la clase principal es baseDatos                                      |
 _____________________________________________________________________________________________________| /
*/
//Clase principal
function DataBase(){
	
	//Datos de conexion y creacion
	var NombreDB   ="db";
	var VersionDB  ="1.0";
	var Descripcion="Base de datos aplicacion";
	var tamano     =5*1024*1024;
	
	this.conexion = function(){
		this.db = window.openDatabase(NombreDB,VersionDB,Descripcion,tamano);
	};

	this.conexion_global = function(){
		this.conexion();
		return this.db;
	};
	
	/**PARAMETROS DE CONEXION PARA WEB SERVICES */
	//Metodo que me permite la creacion he inserccion de datos necesarios para la conexion a los servicios Web
	this.crear_db=function(){
		
		this.conexion();
		this.db.transaction(createquery, errorDB, exitoDB );

		function createquery(tx){
			tx.executeSql("create table if not exists tblprueba( "  
			+"  usr char(100)," +
			  " accept char(10)," +
			  " over char(100))");
			tx.executeSql("insert or ignore into tblprueba(usr, accept, over) values ('1', '2', '3')");
		}

		function errorDB(){
			 console.log("Error en la tabla tblParamConexion. Metodo: ");

		}
		function exitoDB(){
			console.log("Operacion correcta. Metodo: ");

		}

	};	

	
};


//CONSULTAS A LA BASE DE DATOS

/**
 *------------------------------------------------------------------------------------------------------
 * 																									   |
 *                            CREACION DE CONSULTAS A LA BASE DE DATOS								   | 
 *      AUTOR:                                                  									   |
 *      	         Santiago Gonzalez Acevedo												           |
 *      FECHA:       23 Agosto 2014                                                                    |
 *      DESCRIPCION: Clase que permite la creacion de funciones para consulta                          |
 *                   los datos necesarios de cada tabla WebSql     									   |
 *      NOM CLASE:   El nombre de la clase principal es consultas                                      |
 _____________________________________________________________________________________________________| /
*/
//Clase principal de consultas

