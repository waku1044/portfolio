const $menu =  document.querySelector('.menu p');
const $items = document.querySelector('.items');

function toogle(){
	console.log('primero' + $menu.innerHTML)
	switch($menu.innerHTML){
	case 'Menu':
		$menu.innerHTML = 'X';
		$menu.style.textAlign= 'center';
		$menu.style.color = '#fff';
		$items.classList.remove('hidden');
		break;
	case 'X':
		$items.classList.add('hidden');
		$menu.innerHTML = 'Menu';
		break;

	}
}

$menu.onclick = toogle