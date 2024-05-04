import React from 'react'
import './styles.css'
const PaymentGateway = () => {
  return (
    <div>
        <section style={{backgroundColor: ' #eee'}}>
  <div class="container py-5">
    <div class="card">
      <div class="card-body">
        <div class="row d-flex justify-content-center pb-5">
          <div class="col-md-7 col-xl-5 mb-4 mb-md-0">
            <div class="py-4 d-flex flex-row">
              <h5><span class="far fa-check-square pe-2"></span><b>ELIGIBLE</b> |</h5>
              <span class="ps-2">Pay</span>
            </div>
            <h4 class="text-success">$85.00</h4>
            <h4>Diabetes Pump & Supplies</h4>
            <div class="d-flex pt-2">
              <div>
                <p>
                  <b>Insurance Responsibility <span class="text-success">$71.76</span></b>
                </p>
              </div>
              <div class="ms-auto">
                <p class="text-primary">
                  <i class="fas fa-plus-circle text-primary pe-1"></i>Add insurance card
                </p>
              </div>
            </div>
            <p>
              Insurance claims and all necessary dependencies will be submitted to your
              insurer for the coverred portion of this order
            </p>
            <div class="rounded d-flex bg-body-tertiary">
              <div class="p-2">Aetna-Open Access</div>
              <div class="ms-auto p-2">OAP</div>
            </div>
            <hr />
            <div class="pt-2">
              <div class="d-flex pb-2">
                <div>
                  <p>
                    <b>Patient Balance <span class="text-success">$13.24</span></b>
                  </p>
                </div>
                <div class="ms-auto">
                  <p class="text-primary">
                    <i class="fas fa-plus-circle text-primary pe-1"></i>Add payment card
                  </p>
                </div>
              </div>
              <p>
                This is an estimate for the portion of your order (not covered by
                insurance) due today . once insurance finalizes their review refunds
                and/or balances will reconcile automatically.
              </p>
              <form class="pb-3">
                <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1"
                      value="" aria-label="..." checked />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa Debit
                      Card
                    </p>
                    <div class="ms-auto">************3456</div>
                  </div>
                </div>

                <div class="d-flex flex-row">
                  <div class="d-flex align-items-center pe-2">
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2"
                      value="" aria-label="..." />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>Mastercard
                      Office
                    </p>
                    <div class="ms-auto">************1038</div>
                  </div>
                </div>
              </form>
              <input type="button" value="Proceed to payment" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block btn-lg" />
            </div>
          </div>

          <div class="col-md-5 col-xl-4 offset-xl-1">
            <div class="py-4 d-flex justify-content-end">
              <h6><a href="#!">Cancel and return to website</a></h6>
            </div>
            <div class="rounded d-flex flex-column p-2 bg-body-tertiary">
              <div class="p-2 me-3">
                <h4>Order Recap</h4>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">Contracted Price</div>
                <div class="ms-auto">$186.76</div>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">Amount toward deductible</div>
                <div class="ms-auto">$0.00</div>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">Coinsurance( 0% )</div>
                <div class="ms-auto">+ $0.00</div>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">Copayment</div>
                <div class="ms-auto">+ $40.00</div>
              </div>
              <div class="border-top px-2 mx-2"></div>
              <div class="p-2 d-flex pt-3">
                <div class="col-8">Total Deductible, Coinsurance, and Copay</div>
                <div class="ms-auto">$40.00</div>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">
                  Maximum out-of-pocket on Insurance Policy (not reached)
                </div>
                <div class="ms-auto">$6500.00</div>
              </div>
              <div class="border-top px-2 mx-2"></div>
              <div class="p-2 d-flex pt-3">
                <div class="col-8">Insurance Responsibility</div>
                <div class="ms-auto"><b>$71.76</b></div>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">
                  Patient Balance <span class="fa fa-question-circle text-dark"></span>
                </div>
                <div class="ms-auto"><b>$71.76</b></div>
              </div>
              <div class="border-top px-2 mx-2"></div>
              <div class="p-2 d-flex pt-3">
                <div class="col-8"><b>Total</b></div>
                <div class="ms-auto"><b class="text-success">$85.00</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default PaymentGateway