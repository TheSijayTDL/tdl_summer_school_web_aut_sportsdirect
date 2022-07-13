import MainPage from "../pageObjects/MainPage";

describe('SportsDirect', () => {
  beforeEach(() => {
    MainPage.visit();
  });

  it("Test scenario", () => {
    MainPage.selectBrands.click();
    MainPage.selectAdidas.click();
    MainPage.selectTrainers
      .contains("Trainers")
      .click();
    MainPage.checkMens.click();
    MainPage.checkTrainers.click();
    MainPage.checkCourt.click();
    MainPage.checkLeather.click();
    MainPage.checkBlack.click();
    MainPage.checkProduct.should("have.length", 2);
    MainPage.chooseProduct.click();
    MainPage.validateProduct.should("have.text", "Grand Court SE Trainers Mens");
  });
});