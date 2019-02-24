function getProductsList(){
	const listaProductoAsString = localStorage.getItem('lista')
	const listaProducto = JSON.parse(listaProductoAsString)
	return listaProducto
}

let listaProducto = localStorage.getItem('lista')
	? JSON.parse(localStorage.getItem('lista'))
	: []


$(document).ready(function (){
	$('#boton-subir-producto').on('click', function (){
		const nombre = $('#product-name').val()
		const descripcion = $('#product-description').val()
		const cantidad = $('#product-quantity').val()
		const precio = $('#product-price').val()
		const imagen = $('#product-image').val()

		console.log('nombre:', nombre)
		console.log('descripcion:', descripcion)
		console.log('cantidad:', cantidad)
		console.log('precio:', precio)
		console.log('imagen:', imagen)

		const producto = {
			nombre,
			descripcion,
			cantidad,
			precio,
			imagen
		}

		listaProducto.push(producto)
		console.log('listaProducto: ', listaProducto)

		localStorage.setItem('lista', JSON.stringify(listaProducto))


	})
})