<template>
    <div>
      <MenuComponent />
  
      <header>
            <div class="container" >
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center text-white">Про сайт</h1>
                    </div>
                </div>
            </div>
        </header>
    
        <main class="main">
            <section class="about">
                <div class="container">
                    <div class="row align-items-center mb-5">
                            <h5>Ласкаво просимо до Pixel Art Gallery - вашого віртуального пристановища для естетів та шанувальників мистецтва піксель-артів. Наша галерея запрошує вас у захоплюючу подорож у світ кольорів, форм і фантазії, де кожен піксель виблискує власним виразом. Відкрийте для себе витвори майстрів піксельного мистецтва з усього світу. Насолоджуйтесь кожним артефактом, розглядаючи кожен піксель як унікальний камінчик, який складається у величну мозаїку мистецтва. Приєднуйтесь до нас, щоб відчути віддзеркалення краси через призму цифрового мистецтва і знайти натхнення для вашої власної творчості. Ласкаво просимо до Pixel Art Gallery - де кожен піксель - це окрема історія, а кожен візерунок - це шедевр у світі цифрового мистецтва.</h5>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <a href="index.html" class="btn btn-itd btn-lg text-uppercase">Галерея робіт</a>
                        </div>
                    </div>
                </div>
             </section>   
        </main>
    </div>
  </template>
  
  <script>
  import MenuComponent from '@/components/Menu.vue'
  
  export default {
    components: {
      MenuComponent
    }
  }
  </script>
  