describe('영화 검색(겨울왕국2)', () => {
  it('검색 페이지 접근', () => {
    cy.visit('/') // 검색(메인) 페이지 접근
    cy.get('header .nav-link.active').contains('Search') // 검색(메인) 페이지인지 확인
  })

  it('영화 검색', () => {
    cy.get('input.form-control').type('frozen') // 영화 제목 'frozen'
    cy.get('select.form-select:nth-child(2)').select('30') // 검색 개수 30개 지정
    cy.get('button.btn').contains('Apply').click() // 'Apply'버튼으로 영화 목록 검색
    cy.wait(2000) // 2초 동안 기다림
    cy.get('.movie').should('have.length', 30) // 영화 목록에서 30개 출력
  })

  it('겨울왕국2 선택', () => {
    cy.get('.movie .title').contains('Frozen II').click() // 영화 목록에서 'Frozen II' 영화 아이템 클릭
  })

  it('상세 정보 확인', () => {
    cy.url().should('include', '/movie/tt4520988') // http://localhost:8080/movie/tt4520988 -> 겨울왕국2 주소 확인
    cy.wait(1000) // 1초 동안 기다림
    cy.get('header .nav-link.active').contains('Movie') // 영화 상세 페이지인지 확인
    cy.get('.title').contains('Frozen II') // 영화 제목 'Frozen II' 확인
  })
})