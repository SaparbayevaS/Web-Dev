import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


interface Product {
  name: string;
  description: string;
  image: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class productsComponent  {
  title = 'lab4';
  products: Product[] = [
    {
      name: 'Коврик для мыши Dart Satoru Gojo',
      description: 'Коврик для мыши с прошитыми краями 900x400x3 мм с рисунком Сатору Годжо.',
      image: 'assets/1.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dart-satoru-gojo-900x400x3-mm-risunok-118090816/'
    },
    {
      name: 'Кружка "Магическая битва"',
      description: 'Керамическая кружка с изображением персонажа аниме Магическая битва Сатору Годжо. Прекрасно подойдет любителям аниме.',
      image: 'assets/2.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kruzhka-magicheskaja-bitva-satoru-godzho-300-ml-keramika-129039945/'
    },
    {
      name: 'Декоративный светильник',
      description: 'Представляем вам ночник-картинку по аниме Черный Клевер! Это идеальное дополнение для любителей японской анимации, воплощенное с изображением любимых персонажей в ярких цветах и деталях. Но это не просто ночник. Это искусство, оживающее под мягким светом и привносящее уют и атмосферу в вашу комнату. Картина со световым эффектом - это новый взгляд на декор вашего дома. Подсветка добавляет картине глубину и новый смысл, создавая уникальную атмосферу, которая подчеркнет вашу индивидуальность и стиль. Картины с подсветкой становятся не только украшением интерьера, но и способом выразить свою креативность и вкус. Они придают вашему дому особый шарм и привлекают взгляды гостей. Если вы ищете что-то новое и уникальное для своего дома, не упустите возможность обзавестись этим прекрасным и оригинальным ночником-картинкой! Создайте неповторимую атмосферу с нами.',
      image: 'assets/3.jpg',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/quantum-dekorativnyi-svetil-nik-godzho-i-geto-derevo-plastik-130234606/'
    },
    {
      name: 'Брелок "Сатору Годжо"',
      description: 'Акриловый брелок с изображением Сатору Годжо.',
      image: 'assets/4.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/brelok-16931144-brelok-anime-magicheskaja-bitva-satoru-godzho-akril-1-sht-118459792/'
    },
    {
      name: 'Мягкая игрушка "Сатору Годжо"',
      description: 'Плюшевая игрушка 23 см в стиле аниме, мультиколор.',
      image: 'assets/5.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-anime-godzho-satoru-vysota-23-sm-mul-tikolor-132934755/'
    },
    {
      name: 'Футболка "Сатору Годжо"',
      description: 'Футболка от бренда X-Quantum — это идеальное сочетание стиля и качества. Изготовлена из ткани премиум-класса, она дарит невероятный комфорт в течение всего дня. Принт, выполненный с использованием технологии прямой печати, отличается особой мягкостью и стойкостью, не теряя яркости со временем. Футболка украшена оригинальным принтом. Для сохранения идеального вида рекомендуется стирка на деликатном режиме при температуре не выше 40 градусов. Откройте для себя стиль и долговечность с X-Quantum!',
      image: 'assets/6.jpg',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/futbolka-x-quantum-magicheskaja-bitva-satoru-godzho-chernyi-oversize-134325701/'
    },
    {
      name: 'Холст "Сатору Годзё"',
      description: 'Акриловая картина по номерам, холст на подрамнике 20x20 см с изображением Годжо.',
      image: 'assets/7.jpg',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/godzho-satoru-holst-na-podramnike-20x20-sm-120695983/'
    },
    {
      name: 'Сумка-шоппер "Сатору Годжо"',
      description: 'Хлопковая сумка с аниме-принтом, мультиколор.',
      image: 'assets/8.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/sumka-shopper-16931144-satoru-gojo-anime-shopper-hlopok-mul-tikolor-119353817/'
    },
    {
      name: 'Значки "Магическая битва"',
      description: 'Набор из 2 значков с аниме-дизайном, мультиколор.',
      image: 'assets/9.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/para-znachkov-magicheskaja-bitva-satoru-godzho-znachok-2-sht-131785177/'
    },
    {
      name: 'Тапочки "Годжо"',
      description: 'Мягкие, синтетические тапочки с аниме-дизайном, размер 37.',
      image: 'assets/10.jpeg',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/tapochki-gojo-855-mul-tikolor-37-133852912/'
    }
  ];

  shareToTelegram(product: Product) {
    const message = encodeURIComponent(`${product.name} - ${product.link}`);
    const telegramUrl = `https://t.me/share/url?url=${product.link}&text=${message}`;
    window.open(telegramUrl, '_blank'); 
  }
}

