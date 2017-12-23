//META{"name":"quickOpenLink"}*//
'use strict';
function quickOpenLink() {
	function checkClick(e) {
		function modalObserver(m) {
			const mut = m[0];
			var modal, backdrop;
			if(mut.addedNodes.length) {
				modal = root.getElementsByClassName('modal-image')[0];
				if(modal) {
					this.disconnect();
					backdrop = root.getElementsByClassName('backdrop-2ohBEd')[0]; // was 'callout-backdrop' before edits
					backdrop.style.display = modal.style.display = 'none';
					backdrop.click();
				}
			}
		}
		var node;
		if(e.ctrlKey) {
			node = e.target;
			if(node.nodeName=='IMG') {
				node=node.parentNode;
				if(node.nodeName=='A') {
					open(node.href);
					new MutationObserver(modalObserver).observe(root,{childList:1,subtree:1});
				}
			}
		}
	}
	const _= this,
	root = document.getElementById('app-mount'), // find the element with the ID of app-mount
	section = root.getElementsByClassName('messages-wrapper')[0]; // was root.getElementsByTagName('section') before edit
	// Should also try 'messages' and 'scroller-wrap' on the line above
	// or 'theme-dark'
	_.getName=()=>'Quick Link Open';
	_.getDescription=()=>'Ctrl+Click to open attachments in your browser';
	_.getVersion=()=>'0.3';
	_.getAuthor=()=>'XFox Prower';
	_.load=()=>{};
	_.start=function()
		{
		section.addEventListener('click', checkClick, false);
		};
	_.stop=function()
		{
		section.removeEventListener('click', checkClick, false);
		};
	}
