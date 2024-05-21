<template>
    <section class="navbarmenu">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <div style="display: flex;">
                            <h5 class="navbar-brand" >Pixel Art Gallery</h5>
                            <img src="/img/icons/icon1.png"  class="rounded" style="width: 25px; height: 25px; margin-left: -10px; margin-top: 5px;">
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="index.html">Головна</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Профіль
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/signup.html">Зареєструватись</a></li>
                                        <li><a class="dropdown-item" href="/signin.html">Увійти</a></li>
                                        <li><hr class="dropdown-divider">
                                            <a class="dropdown-item" href="/profile.html">Користувач</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="about.html">Про сайт</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
</template>