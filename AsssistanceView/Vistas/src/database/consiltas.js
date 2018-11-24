
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
function consultas(){
	debugger;
	var db = new DataBase()
	//Datos de conexion y creacion
	var NombreDB   ="wallpaperhd";
	var VersionDB  ="1.0";
	var Descripcion="Base de datos aplicacion";
	var tamano     =5*1024*1024;
	
	this.basedatosConexion=function(){
		this.db=window.openDatabase(NombreDB,VersionDB,Descripcion,tamano);
	};

	/**
	 * @WebService
	 * Funcion que permite formar la URL, con la cual se consumen los servicios web
	 */
	this.webservice=function(callback){
	
		this.basedatosConexion();
		this.db.transaction(consultaUrl,errorDB,exitoDB);
		function consultaUrl(tx){
			//Setencia sql
			tx.executeSql("SELECT urlConexion, user, password FROM tblParamConexion",[],mostrar,errorDB);
			function mostrar(tx,results){
				var tamano=results.rows.length;
				if(tamano>0){
					//Callback con el resultado obtenido del select
					callback(results);
				}else{
					console.log("Ejecucion correcta: Webservice. No se encontro datos");
				}
			};
		};
		//Validacion y mensajes de error
		function errorDB(){
			 console.log("Error al consultar: webservice");
		}
		function exitoDB(){
			 console.log("Exito al consultar: webservice");

		}
	
	};
		
};

