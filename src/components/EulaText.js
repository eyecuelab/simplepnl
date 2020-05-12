import React from 'react';

function EulaText() {
  return (
    <div className="EulaText">

      <h5>Last updated: May 1, 2020</h5>

      <p>
        {`This End-User License Agreement (EULA) is a legal agreement between you
          (either an individual or a single entity) and the mentioned author (MKBK
          LLC) of this Software for the Application identified above, which includes
          computer software and may include associated media, printed materials,
          and “online” or electronic documentation. Please read this EULA carefully
          before clicking the "I Agree" button, authorizing or using SimplePNL
          ("Application").`}
      </p>


      <p>
        {`By clicking the "I Agree" button or using the Application, you are agreeing
          to be bound by the terms and conditions of this Agreement.`}
      </p>


      <p>
        {`If you do not agree to the terms of this Agreement, do not click on the
          "I Agree" button and do not access or use the Application.`}
      </p>


      <h5>SOFTWARE PRODUCT LICENSE</h5>

      <p>
        {`SimplePNL is being distributed as Freeware for personal, commercial use,
          non-profit organization, and educational purpose. You are NOT allowed
          to make a charge for distributing this Application (either for profit
          or merely to recover your media and distribution costs) whether as a stand-alone
          product, or as part of a compilation or anthology, nor to use it for supporting
          your business or customers. It may be distributed freely on any website
          or through any other distribution mechanism, as long as no part of it
          is changed in any way.`}
      </p>

      <h5>1. GRANT OF LICENSE.</h5>

      <p>
        {`This EULA grants you the following rights: Installation and Use. You may
          install and use an unlimited number of copies of the Application. Copies
          of the Application may be distributed as a standalone product or included
          with your own product as long as The Application is not sold or included
          in a product or package that intends to receive benefits through the inclusion
          of the Application.`}
      </p>

      <p>
        {`The Application may be included in any free or non-profit packages or
          products.`}
      </p>

      <h5>Confidential Information.</h5>
      <p>
        {`MKBK LLC acknowledges that in the course of performing the Services above
          for your company, we may gain access to certain confidential or proprietary
          information. Such “Confidential Information” shall include all information
          concerning the business, affairs, products, marketing, systems, technology,
          customers, end-users, financial affairs, accounting, statistical data
          belonging to the you and any data, documents, discussion, or other information
          developed by MKBK LLC hereunder and any other proprietary and trade secret
          information of your company whether in oral, graphic, written, electronic
          or machine-readable form. MKBK LLC agrees to hold all such Confidential
          Information in strict confidence and shall not, without the express prior
          written permission of client, (a) disclose such Confidential Information
          to third parties; or (b) use such Confidential Information for any purposes
          whatsoever, other than the performance of its obligations hereunder. The
          obligations under this Section shall survive termination or expiration
          of this Agreement.`}
      </p>

      <h5>2. DESCRIPTION OF OTHER RIGHTS AND LIMITATIONS.</h5>

      <p>
        {`Limitations on Reverse Engineering, Decompilation, Disassembly and change
          (add,delete or modify) the resources in the compiled the assembly. You
          may not reverse engineer, decompile, or disassemble the Application, except
          and only to the extent that such activity is expressly permitted by applicable
          law notwithstanding this limitation.`}
      </p>

      <h5>Termination.</h5>

      <p>
        {`Without prejudice to any other rights, the Author of this Software may
          terminate this EULA if you fail to comply with the terms and conditions
          of this EULA. In such event, you must destroy all copies of the Application
          and all of its component parts.`}
      </p>

      <h5>Services: Third Party Materials.</h5>

      <p>
        {`The Licensed Application may enable access to Application Provider's and
          third party services and web sites (collectively and individually, "Services").
          Use of the Services may require Internet access and that You accept additional
          terms of service.`}
      </p>

      <h5>NO WARRANTIES.</h5>

      <p>
        {`The Author of this Software expressly disclaims any warranty for the Application.
          The Application and any related documentation is provided “as is” without
          warranty of any kind, either express or implied, including, without limitation,
          the implied warranties or merchantability, fitness for a particular purpose,
          or noninfringement. The entire risk arising out of use or performance
          of the Application remains with you.`}
      </p>

      <h5>NO LIABILITY FOR DAMAGES.</h5>

      <p>
        {`In no event shall the author of this Software be liable for any special,
          consequential, incidental, or indirect damages whatsoever (including, without
          limitation, damages for loss of business profits, business interruption,
          loss of business information, or any other pecuniary loss) arising out
          of the use of or inability to use this product, even if the Author of
          this Software is aware of the possibility of such damages and known defects.`}
      </p>

      {/* <h5>CONTACT INFORMATION?</h5> */}

      <hr />
      <hr />

      <style>
        {
          `
          .EulaText {
            text-align: left;
            overflow: auto;
            padding: 0px 50px;
          }
          `
        }
      </style>
    </div>
  );
}

export default EulaText;
