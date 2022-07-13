import BasePage from '../pageObjects/basePage'

class MainPage extends BasePage {
  static get url () {
    return 'https://lv.sportsdirect.com/';
  }

  static get selectBrands() {
    return cy.get("#lnkTopLevelMenu_2579840");
  }

  static get selectAdidas() {
    return cy.get(".Adidas");
  }

  static get selectTrainers() {
    return cy.get(".slideName");
  }

  static get checkMens() {
    return cy.get('[data-productname="Mens"] > .FilterAnchor > .SelectableFilter');
  }

  static get checkTrainers() {
    return cy.get('[data-productname="Trainers"] > .FilterAnchor > .SelectableFilter');
  }

  static get checkCourt() {
    return cy.get('[data-productname="Court Trainers"] > .FilterAnchor > .SelectableFilter');
  }

  static get checkLeather() {
    return cy.get('[data-productname="Leather"] > .FilterAnchor > .SelectableFilter');
  }

  static get checkBlack() {
    return cy.get('[data-productname="Black"] > .FilterAnchor > .SelectableFilter');
  }

  static get checkProduct() {
    return cy.get("[class='s-productthumbbox']");
  }

  static get chooseProduct() {
    return cy.get("[title='adidas - Grand Court SE Trainers Mens']");
  }

  static get validateProduct() {
    return cy.get("#lblProductName");
  }
}

export default MainPage;