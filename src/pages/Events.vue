<template>
  <div class="container">
    <h2>EVENT</h2>
    <br />
    <br />
    <br />
    <hr />
    <br />
    <br />

    <div class="event">
      <p class="event_year">2021</p>
      <div class="event_month">
        <p class="event_month_date">June 9<sup>th</sup> - 12<sup>th</sup></p>
        <p class="event_month_name">
          44th European Cystic Fibrosis Conference, Milan (Italy)
        </p>
      </div>
    </div>

    <hr />
    <br />
    <br />

    <div class="event">
      <p class="event_year">2020</p>
      <div class="event_month">
        <p class="event_month_date">June 3<sup>rd</sup> - 6<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at European Cystic Fibrosis Conference, Lyon (France)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">March 23<sup>rd</sup> - 25<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at Bio Europe Spring, Paris (France)
        </p>
      </div>
    </div>

    <hr />
    <br />
    <br />

    <div class="event">
      <p class="event_year">2019</p>
      <div class="event_month">
        <p class="event_month_date">Nov 4<sup>th</sup> - 8<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at 14th International Lactoferrin Conference, Lima (Peru)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">Oct 30<sup>th</sup> - Nov 2<sup>nd</sup></p>
        <p class="event_month_name">
          Alaxia at North American Cystic Fibrosis Conference, Nashville (TN)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">June 5<sup>th</sup> - 8<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at European Cystic Fibrosis Congress, Liverpool (UK)
        </p>
      </div>
    </div>

    <hr />
    <br />
    <br />

    <div class="event">
      <p class="event_year">2018</p>
      <div class="event_month">
        <p class="event_month_date">Oct 18<sup>th</sup> - 20<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at North American Cystic Fibrosis Conference, Denver (CO)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">June 6<sup>th</sup> - 9<sup>th</sup></p>
        <p class="event_month_name">Alaxia at BIO, Boston (MA)</p>
      </div>

      <div class="event_month">
        <p class="event_month_date">April 5<sup>th</sup> - 7<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at Journees Francophones de la Mucoviscidose, Lyon (F)
        </p>
      </div>
    </div>

    <hr />
    <br />
    <br />

    <div class="event">
      <p class="event_year">2017</p>
      <div class="event_month">
        <p class="event_month_date">Dec 15<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at Cystic Fibrosis Europe, Amsterdam (NL)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">Nov 5<sup>th</sup> - 10<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at International Conference on Lactoferrin, Roma (It)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">Nov 2<sup>nd</sup> - 4<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at North American Cystic Fibrosis Conference, Indianapolis (IN)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">June 7<sup>th</sup> - 10<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at European Cystic Fibrosis Conference, Sevilla (Sp)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">March 30<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at 12ème Journées Scientifiques de la Société Française <br />
          de la Mucoviscidose, Paris (F)
        </p>
      </div>
    </div>

    <hr />
    <br />
    <br />

    <div class="event">
      <p class="event_year">2016</p>
      <div class="event_month">
        <p class="event_month_date">Oct 27<sup>th</sup> - 29<sup>th</sup></p>
        <p class="event_month_name">
          Alaxia at North American Cystic Fibrosis Conference, Orlando (FL)
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">Oct 4<sup>th</sup> - 6<sup>th</sup></p>
        <p class="event_month_name">
          CPHI world wide Barcelona (Sp), Stragen booth 4H11
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">June 8<sup>th</sup> - 11<sup>th</sup></p>
        <p class="event_month_name">
          European Cystic Fibrosis Conference, Basel (CH), Alaxia booth 33
        </p>
      </div>

      <div class="event_month">
        <p class="event_month_date">June 6<sup>th</sup> - 9<sup>th</sup></p>
        <p class="event_month_name">
          Bio San Francisco (CA), French Pavilion booth 705
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  text-align: justify;
}
h2 {
  font-size: 42px;
}
p {
  font-size: 18px;
}
span {
  margin-left: 24px;
}
.event {
  margin-bottom: 40px;
}
.event_year {
  font-size: 24px;
  margin-bottom: 32px;
  font-weight: bolder;
}
.event_month {
  display: flex;
  margin-bottom: 16px;
}
.event_month_date {
  width: 200px;
  font-weight: bold;
  margin-right: 20px;
}
.event_month_name {
  width: 500px;
}
hr {
  border-top: 2px solid #025293;
}
</style>
