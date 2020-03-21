<template>
<div class="container">
    <section id="user-profile" class="mt-5">
        <h3 class="mb-3">Настройка профиля</h3>
        <div class="profile-img d-flex flex-row mb-4">
            <img src="img/Users/profile.svg" width="75px" height="75px" alt="Profile img">
            <a href="" class=" align-self-center ml-3">Поменять аватар</a>
        </div>
        <div class="FIO">
            <span class="mb-2">ФИО</span>
            <form action="">
                <input type="text" class="form-control" value="Сапарбаева Мадина">
            </form>
        </div>
        <hr>
        <div>
            <div class="mb-3">
                <span>Ваш E-mail</span>
                <div class="d-flex flex-row">
                    <span style="color: #333333;">msaparbayevna@gmail.com</span>
                    <a href="" class=" align-self-center ml-3">(изменить)</a>
                </div>
            </div>
            <div class="d-flex flex-column">
                <span>Сброс пароля</span>
                <a href="" class="">сбросить пароль</a>
            </div>
        </div>
      </section>
</div>
</template>
