<template>
  <div class="alx_banner">
    <div class="alx_banner_content container">
      <h2>ALX009</h2>
      <p>
        ALX-009 is a first-in class orphan drug candidate for Cystic Fibrosis
        (CF) patients. It consists in the combination of two endogenous
        substances, hypothiocyanite (OSCN-) and lactoferrin, exhibiting
        antimicrobial properties compensating the defective innate immune system
        in CF patients. ALX-009 is presented as a solution for inhalation for
        the symptomatic treatment of lung infections.
      </p>
    </div>
    <div class="btn container">
      <p><a href="#overview">Overview</a></p>
      <p><a href="#efficacy">Efficacy</a></p>
      <p><a href="#further_reading">Further reading</a></p>
    </div>
  </div>
  <br />
  <div id="overview" class="container alx_overview">
    <h2>OVERVIEW</h2>
    <h3>ALX-009 scientific and medical rationale.</h3>
    <p>
      The genetic causes of CF are linked to the mutation of a single gene, the
      cftr (cystic fibrosis transmembrane conductance regulator) gene. This gene
      codes for the CFTR membrane proteins involved in the ion exchange between
      the cell and the lumen. In the lung, ionic equilibrium is important to
      preserve the protective action of the Airway Surface Liquid (ASL) and
      mucus. However, in CF patients, ASL, mucus volumes and compositions are
      modified. The ASL normally contains bactericidal/bacteriostatic products
      in solution that are less or not present in the ASL of CF patients. In
      addition, the volume of the ASL of CF patients is reduced with increased
      salt content; both factors dehydrate the mucus that becomes thick and
      accumulates at the surface of cells.
    </p>
  </div>
  <br />
  <br />
  <div id="efficacy" class="container efficacy">
    <h2>EFFICACY</h2>
    <h3>
      ALX-009 (OSCN-/bLF) – a therapeutic option to fight broader bacterial
      infections
    </h3>
    <p>
      The genetic causes of CF are linked to the mutation of a single gene, the
      cftr (cystic fibrosis transmembrane conductance regulator) gene. This gene
      codes for the CFTR membrane proteins involved in the ion exchange between
      the cell and the lumen. In the lung, ionic equilibrium is important to
      preserve the protective action of the Airway Surface Liquid (ASL) and
      mucus. However, in CF patients, ASL, mucus volumes and compositions are
      modified. The ASL normally contains bactericidal/bacteriostatic products
      in solution that are less or not present in the ASL of CF patients. In
      addition, the volume of the ASL of CF patients is reduced with increased
      salt content; both factors dehydrate the mucus that becomes thick and
      accumulates at the surface of cells.
    </p>
  </div>
  <br />
  <br />
  <div id="further_reading" class="container further_reading">
    <h2>FURTHER READING</h2>
    <h3>
      The lactoperoxidase system functions in bacterial clearance of airways.
    </h3>
    <p>
      The genetic causes of CF are linked to the mutation of a single gene, the
      cftr (cystic fibrosis transmembrane conductance regulator) gene. This gene
      codes for the CFTR membrane proteins involved in the ion exchange between
      the cell and the lumen. In the lung, ionic equilibrium is important to
      preserve the protective action of the Airway Surface Liquid (ASL) and
      mucus. However, in CF patients, ASL, mucus volumes and compositions are
      modified. The ASL normally contains bactericidal/bacteriostatic products
      in solution that are less or not present in the ASL of CF patients. In
      addition, the volume of the ASL of CF patients is reduced with increased
      salt content; both factors dehydrate the mucus that becomes thick and
      accumulates at the surface of cells.
    </p>
  </div>
  <br />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  text-align: left;
}
.alx_banner {
  position: relative;
  height: 250px;
  margin-top: -40px;
  background-color: #025293;
  padding-top: 36px;
  padding-bottom: 36px;
  h2,
  p {
    color: white;
  }
}
.btn {
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  cursor: pointer;
  opacity: 0.8;
  background: white;
  color: #025293;
  margin-right: 12px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 8px;
  transition: 0.3s all ease-in-out;
  &:hover {
    opacity: 0.6;
  }
}
</style>
