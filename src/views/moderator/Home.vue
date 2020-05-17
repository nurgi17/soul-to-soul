<template>
  <div class="requests row">
    <div class="counts col-5">
      <div class="count-top row">
        <div class="col-6">
          <span>Новых запросов</span>
          <h2>45</h2>
        </div>
        <div class="col-6">
          <span>Новых запросов блога</span>
          <h2>96</h2>
        </div>
      </div>
      <div class="count-bottom row">
        <div class="col-6">
          <span>Отработано</span>
          <h2>160</h2>
        </div>
        <div class="col-6">
          <span>Отработано статьи блога</span>
          <h2>147</h2>
        </div>
      </div>
    </div>
    <div class="statistics col-7">
      <b-img-lazy src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Moderator%2Fkz-min.jpg?alt=media&token=77a2024d-0f81-4e7c-8ef1-d8755fcfc2e4" class="w-100" alt="Kazakhstan map img" ></b-img-lazy>
      <div>
        <span>Статистика</span>

        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <p>г. Нур-Султан</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 85%;"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <p>г. Алматы</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <p>г. Шымкент</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 50%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <p>Алматинская область</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 63%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <p>ВКО</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 30%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <p>Туркенстанская область</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 35%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <p>Кызылординская область</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 40%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <p>Мангыстаунская область</p>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'moderator'
}
</script>
