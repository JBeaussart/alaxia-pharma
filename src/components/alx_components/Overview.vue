<template>
  <div id="overview" class="container alx_overview">
    <h2 class="alx_part_title">
      <i class="fas fa-binoculars banner_icon"></i> OVERVIEW
    </h2>
    <br />
    <h3>ALX-009 scientific and medical rationale.</h3>
    <br />
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
    <br />
    <div>
      <p class="alx_page_schema_description">
        Impaired OSCN- and lactoferrin in CF patients lungs’ defense
      </p>
      <img
        class="alx_page_schema"
        src="../../assets/alx_page/alx_page_first_schemajpg.jpg"
        alt=""
      />
    </div>
    <br />
    <p>
      OSCN- and lactoferrin are among the bactericidal compounds that are
      deficient in the ASL of CF patients. OSCN- is a potent large spectrum
      antimicrobial compound whereas lactoferrin is a multifunctional protein
      that inactivates/kills bacteria. Presence of OSCN- is significantly
      influenced by the CFTR function. Indeed, the precursor molecule SCN-
      transits by the CFTR channel to the ASL where it reacts with H2O2 via a
      lactoperoxidase enzymatic reaction to produce OSCN-. However, in CF
      patients, the SCN- traffic via the CFTR channel is inefficient and the
      secretion of lactoperoxidase seems also impaired by the obstruction of
      goblet cells by the thick mucus covering the CF lung epithelia. OSCN-
      production is then compromised. Lactoferrin secretion is also blocked by
      the mucus, reducing even more the natural ASL defense capacity. OSCN- is a
      highly reactive compound that oxidizes free thiol radicals of proteins to
      created disulfide bonds that perturb the bacterial physiology. Lactoferrin
      may act by direct interaction with bacterial cell membranes by depriving
      bacteria of iron due to its iron chelator activity. By providing both
      molecules, ALX-009, a fixed combination of OSCN- and lactoferrin, will
      contribute to restore the natural capacity of the lung to fight against
      infections.
    </p>
    <br />
    <h3>Mode of Action :</h3>
    <br />
    <div>
      <a target="_blank" href="https://vimeo.com/243802312"
        ><img
          class="alx_page_second_schema"
          src="../../assets/alx_page/alx_page_second_schemajpg.jpg"
          alt=""
      /></a>
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
p {
  font-size: 18px;
  line-height: 24px;
}
h3 {
  font-size: 18px;
}
.alx_part_title {
  font-size: 24px;
}
.alx_page_schema {
  width: 40vw;
}
.alx_page_second_schema {
  width: 60vw;
}
.alx_page_schema_description {
  font-style: italic;
  font-size: 14px;
}
.banner_icon {
  font-size: 24px;
}
</style>
