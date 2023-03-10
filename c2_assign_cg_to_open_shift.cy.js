import { ConfirmPage } from '../page-objects/confirm_page'
import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('assigns a caregiver to an open shift', () => {
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()
    const confirmPage = new ConfirmPage()

    it('logs in with user type 1', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
  
        cy.visit('')
        loginPage.login(username,password)
        loginPage.validateURL()
    })

    it('navigates to the scheduling page', () => {
        schedulingPage.goToScheduling()
      })

    it ('selects a facility', () => {
        schedulingPage.selectFacility()
    })

    it('sets employee type', () => {
        schedulingPage.setCaregiverType()
    })

    it('goes to next week', () => {
        schedulingPage.goNextWeek()
    })

    it ('creates an open shift', () => {
        schedulingPage.addShift()
    })

    it('verifies shift was added', () => {
        schedulingPage.shiftAppears()
    })

    it('selects an employee', () => {
        schedulingPage.selectEmployee()
    })

    it('views open shifts', () => { 
        schedulingPage.viewOpenShifts()
    })

    it('selects the assigned shift', () => {
        schedulingPage.selectOpenShift()
    })

    it ('assigns caregiver to unassigned shift', () => {
        schedulingPage.assignCaregiver()
    })

    it ('verifies shift is available on confirmations screen', () => {
        confirmPage.goToConfirm()
        confirmPage.unconfirmedShiftAppears()
    })

    it ('returns to the scheduling page and deletes the test shift', () => {
        schedulingPage.goToScheduling()
        cy.get('.MuiAvatar-root')
        .each(($ele, index) => {
            if (index <=2 ) cy.wrap($ele).rightclick().get('li').contains('Cancel').click().get('li').contains('Booking Error').click()
          })
        
    })
    
})
