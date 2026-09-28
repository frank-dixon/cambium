/**
 * Cambium content — modes, Simple/Advanced copy, citations.
 * Keep sentences full and attributed; Advanced adds physiology detail.
 */
window.CAMBIUM_CONTENT = {
  modes: {
    "maple-sap": {
      group: "maple",
      label: "Sap run",
      title: "Sugar maple sap run",
      latin: "Acer saccharum",
      simple: [
        "In late winter and early spring, sugar maples move a clear, slightly sweet sap through their wood. That flow is what people collect for maple syrup.",
        "The run depends on freeze–thaw weather. Cold nights and milder days help build and release pressure in the stem so sap can drip from a taphole.",
        "The sugar in that sap is not made in the winter. It comes mostly from starch the tree stored in its wood and roots the summer before.",
      ],
      advanced: [
        "During the dormant season, stem and root parenchyma convert stored starch to soluble sugars. Those sugars raise the solute concentration of sap in the xylem.",
        "Classic freeze–thaw models describe gas and ice dynamics in fiber and vessel elements that generate positive stem pressure on warming days after freezing nights. The result is outward sap flow when a taphole opens that pressurized pathway.",
        "Sap sugar concentration commonly sits near 2% for sugar maple under good conditions, though values vary with site, weather, and tree. Concentration and volume are not the same thing: a long run can yield a lot of dilute sap.",
        "This page simplifies a live research topic. Stem pressure in maple is still studied; treat extension guides as practice summaries, not the last word on every mechanism.",
      ],
    },
    "maple-tap": {
      group: "maple",
      label: "Tap",
      title: "Tapping the stem",
      latin: "Acer saccharum",
      simple: [
        "A tap is a small hole drilled into the outer sapwood so sap can leave the pressurized stem and enter a spout or tubing.",
        "Producers wait for the seasonal run and choose trees large enough that a few tapholes will not overwhelm the living wood.",
        "The tree walls off the wound over time. Good practice limits hole size and number so most of the canopy keeps a healthy water pathway.",
      ],
      advanced: [
        "Extension guidance often uses diameter thresholds (for example, waiting until a trunk is several inches across before the first tap, then adding taps only as girth increases). Exact numbers belong to current local guides, not a fixed universal rule.",
        "A taphole wounds vessels and fibers. Compartmentalization of decay in trees (CODIT-style walling) seals the column above and below the hole so the tree keeps conducting water in adjacent wood.",
        "Sanitation, sharp bits, correct depth into sapwood (not deep into heartwood), and retiring old sites matter because repeated injury in the same sector shrinks usable sapwood over years.",
        "This app is physiology education, not a producer manual. Follow your state’s maple association or university extension for legal and best-practice tapping rules.",
      ],
    },
    "maple-leaf": {
      group: "maple",
      label: "Leaf-out",
      title: "Leaf-out and recharge",
      latin: "Acer saccharum",
      simple: [
        "When buds open and leaves expand, the maple shifts from living on stored starch to making new sugars with photosynthesis.",
        "Sap runs fade as nights warm and the canopy turns on. The tree then rebuilds starch for the next dormant season.",
        "Leaf-out timing tracks local climate. A warm spell can pull buds forward; a late freeze can damage soft new tissue.",
      ],
      advanced: [
        "Budbreak ends the classic sugaring window because transpiration and phenology change stem water relations; positive pressure events become less useful for collection.",
        "New leaves export photosynthate through the phloem. Over summer, surplus carbon is stored again as starch in ray parenchyma and roots—the bank that next spring’s sap will draw on.",
        "Sugar maple is shade-tolerant but still needs a functioning canopy. Defoliation, drought, or crown loss in one year can weaken the next season’s starch reserve and sap yield.",
      ],
    },
    apple: {
      group: "fruit",
      label: "Apple",
      title: "How an apple makes fruit",
      latin: "Malus domestica",
      simple: [
        "Apple trees flower in spring. Most varieties need pollen from a different compatible variety to set a full crop.",
        "After fertilization, the flower’s base swells into a pome: the flesh you eat is largely floral tissue wrapped around a core of seeds.",
        "Fruit grow through the season and sweeten as starch converts to sugars near harvest.",
      ],
      advanced: [
        "Apples form on spurs or shoots depending on cultivar training. Crop load is a physiology story: too many fruitlets compete for carbon and stay small; June drop and thinning adjust that sink demand.",
        "A pome’s edible cortex is accessory tissue; true fruit walls are the core. Seed count and pollination quality influence fruit size and symmetry.",
        "Ethylene and cool nights near maturity help drive the starch-to-sugar shift and aroma compounds that mark harvest windows for many dessert cultivars.",
      ],
    },
    peach: {
      group: "fruit",
      label: "Peach",
      title: "How a peach makes fruit",
      latin: "Prunus persica",
      simple: [
        "Peaches flower early in spring. Each fertilized flower can become a single stone fruit with a fleshy outer layer and a hard pit around the seed.",
        "The fruit softens and sugars rise as it ripens on the tree. Peaches are usually picked close to eating ripeness because they do not store like apples.",
        "Most peach cultivars need a stretch of winter chill so buds open evenly when spring arrives.",
      ],
      advanced: [
        "A peach is a drupe: exocarp skin, mesocarp flesh, endocarp pit. Double-sigmoid growth curves describe early cell division, pit hardening, and a final flesh expansion phase.",
        "Chill hours (hours in a cool band, often near 0–7 °C depending on the model) accumulate in winter. Insufficient chill yields delayed or erratic bloom and weak fruit set in warm-winter sites.",
        "Unlike many apple cultivars, peaches are typically self-fertile, so a single tree can set fruit, though bees still improve set in commercial blocks.",
      ],
    },
    orange: {
      group: "fruit",
      label: "Orange",
      title: "How a sweet orange makes fruit",
      latin: "Citrus × sinensis",
      simple: [
        "Sweet orange trees are evergreen. They flower in flushes, and fertilized flowers develop into hesperidia—the segmented citrus fruit with a leathery rind.",
        "Juice sacs fill the segments as the fruit grows. Acidity drops and sugars rise as the fruit approaches maturity on the tree.",
        "Citrus can hold fruit for a long time compared with peaches, which is why harvest windows feel wide in many groves.",
      ],
      advanced: [
        "A hesperidium is a specialized berry: the rind (flavedo + albedo) surrounds juice vesicles derived from the endocarp. Oil glands in the flavedo carry the familiar peel aroma.",
        "Many sweet orange selections show strong parthenocarpy or seedlessness in commercial clones, but flower quality and carbohydrate status still govern fruit set after bloom.",
        "Evergreen canopies photosynthesize year-round in suitable climates, so fruit growth competes with new flush and root growth for carbon—grove nutrition and irrigation target that balance.",
      ],
    },
    grape: {
      group: "fruit",
      label: "Grape",
      title: "How a grapevine makes fruit",
      latin: "Vitis vinifera",
      simple: [
        "Grapevines flower in clusters. Fertilized flowers become berries that hang together as a bunch.",
        "Early on, berries are hard and acidic. At veraison they soften, change color, and accumulate sugars while acidity falls.",
        "Canopy leaves feed the clusters. Shade, crop size, and weather all change how ripe a bunch becomes.",
      ],
      advanced: [
        "A grape berry is a true berry with seeds (unless the cultivar is seedless). Cluster architecture is set at bloom; shatter and poor set reduce berry number per rachis.",
        "Veraison marks the shift from herbaceous growth to ripening: anthocyanins rise in dark cultivars, chlorophyll declines, and phloem unloading of sugar accelerates.",
        "Vitis physiology is tightly tied to the previous season’s cane reserves and the current season’s leaf area to fruit ratio—hence canopy management in vineyards, which is separate from the pruning craft covered in Crownwork.",
      ],
    },
  },
  sources: [
    {
      id: "usda-fs-maple",
      text: "USDA Forest Service — maple syrup and sugar maple silviculture materials for Acer saccharum range and management context.",
      href: "https://www.fs.usda.gov/",
    },
    {
      id: "uvm-maple",
      text: "University of Vermont Extension Proctor Maple Research Center — sugarbush practice and sap-flow education.",
      href: "https://www.uvm.edu/extension/agriculture/maple",
    },
    {
      id: "cornell-maple",
      text: "Cornell College of Agriculture and Life Sciences — maple production and tree physiology extension summaries.",
      href: "https://cals.cornell.edu/",
    },
    {
      id: "tyree",
      text: "Tyree, M. T., & Zimmermann, M. H. — Xylem Structure and the Ascent of Sap (classic reference for stem water relations; maple pressure models sit in this tradition).",
      href: "https://link.springer.com/book/10.1007/978-3-662-04931-0",
    },
    {
      id: "pomology",
      text: "Standard pomology texts and university fruit extension (apple pome development, Prunus chill models, citrus hesperidium structure, Vitis veraison) inform the fruit-mode Advanced notes.",
      href: "https://www.extension.org/",
    },
  ],
};
