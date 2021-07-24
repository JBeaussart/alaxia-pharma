<template>
  <div class="footer_container">
    <div class="container">
      <h3>WARNING</h3>
      <p>
        Please be aware that some people are fraudulently using our name and
        logo to offer fake jobs without our consent. We at Alaxia never ask job
        seekers to pay or purchase anything while applying for a job, nor cash
        in any check. Please do not respond to such proposals. Be sure that we
        are doing everything we can to stop these fraudulent actions. Only jobs
        offered and/or discussed with Alaxia French Team are real.
      </p>
      <br />
      <h3>KEEP IN TOUCH</h3>
    </div>
    <div>
      <a target="_blank" href="https://www.linkedin.com/company/alaxia-sas/">
        <i class="fab fa-linkedin-in"></i
      ></a>
      <a target="_blank" href="https://twitter.com/Meveol"
        ><i class="fab fa-twitter"></i
      ></a>
    </div>
    <br />
    <p>© 2014 Alaxia. All rights reserved. Terms of Use | Privacy Statements</p>
    <br />
    <p>
      ALAXIA SAS - Bâtiment Quadrille, 30 Rue Edouard Nieuport – F-69008 LYON
      Phone : +33 (0) 437 532 640 – contact (at) bioalaxia.eu
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer_container {
  background-color: rgba($color: #5698ce, $alpha: 0.4);
  padding-top: 20px;
  padding-bottom: 20px;
}
i {
  font-size: 32px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
p:nth-child(2) {
  text-align: justify;
}
p:last-child {
  width: 300px;
  margin: 0 auto;
}
p:nth-child(4) {
  width: 300px;
  margin: 0 auto;
}
</style>
