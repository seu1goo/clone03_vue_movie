describe('About 페이지 이동', () => {
  it('메인 페이지 접근', () => {
    cy.visit('/') // 검색(메인) 페이지 접근
    cy.get('header .nav-link.active').contains('Search') // 검색(메인) 페이지인지 확인
  })

  it('About 페이지 이동', () => {
    cy.get('header .nav-link').contains('About').click() // About 페이지 이동
    cy.url().should('include', '/about') // url에 about 포함 여부 확인
    cy.wait(1000) // 1초 동안 기다림
    cy.get('header .nav-link.active').contains('About') // About 페이지 확인
    cy.get('.name').contains('seu1goo') // name이 seu1goo인지 확인
  })

  it('영화 상세페이지 이동', () => {
    cy.get('header .nav-link').contains('Movie').click() // 영화 상세 페이지 이동
    cy.url().should('include', '/movie') // url에 movie 포함 여부 확인
  })

  it('About 페이지 이동', () => {
    cy.get('header .user').click() // 사용자 로고 클릭
    cy.url().should('include', '/about') // url에 about 포함 여부 확인
    cy.wait(1000) // 1초 동안 기다림
    cy.get('header .nav-link.active').contains('About') // About 페이지 확인
    cy.get('.name').contains('seu1goo') // name이 seu1goo인지 확인
  })
})