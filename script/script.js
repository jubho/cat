$(document).ready(function(){
	
	//���� �޴�
	$("nav a").click(function(){
		const i = $(this).parent().index();
		console.log(i); 	
		$(this).addClass("menuOver m" + (i+1) ).parent().siblings().children().removeClass();
	});
	
	//���콺�ٿ� ���� ���ʸ޴� Ȱ��ȭ
	$(document).scroll(function(){
		
		const h1 = $(window).height();//������ ����
		console.log(h1); 
		
		const t1 = $(document).scrollTop();//��ũ���� ��ŭ ���ȳ�
		console.log(t1); 
		
		const ht = Math.floor(t1/h1);
		
		
		$("nav a").removeClass();//��� Ŭ���� ����
		$("nav li").eq(ht).children().addClass("menuOver m" + (ht+1));
		
	});
	
	
});/////all end
