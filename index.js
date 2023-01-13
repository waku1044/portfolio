const $menu =  document.querySelector('.menu p');
const $items = document.querySelector('.items');

function toogle(){
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

let options = document.querySelectorAll('.option');
function hiddenOption(e){
	console.log(this)
	$items.classList.add('hidden');
	$menu.innerHTML = 'Menu';
	
	

}
$menu.onclick = toogle;
options.onclick = hiddenOption;
