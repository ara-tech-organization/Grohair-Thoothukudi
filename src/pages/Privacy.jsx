import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { clinic } from "../data/site";

export default function Privacy() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    // Defer so Layout's scroll-to-top runs first, then we scroll to the section.
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy & Terms"
        description={`How ${clinic.shortName} — ${clinic.city} collects, uses and protects your information, and the terms under which we offer our services.`}
      />

      <section className="section">
        <div className="container-px mx-auto max-w-3xl">
          <article className="space-y-14 text-[15px] leading-relaxed text-ink-700">
            {/* PRIVACY POLICY */}
            <Section id="privacy-policy" title="Privacy Policy">
              <P>
                {clinic.shortName} - {clinic.city} abides to maintain privacy
                and this applies to all the information collected from you or
                published on our website/application. We will not unless required
                by law, use or share the information with external or third
                parties. Privacy policy applies to the collection, storage and
                usage of all information from {clinic.shortName} - {clinic.city}.
                By using the services of this application, you agree to the
                terms and conditions of the {clinic.shortName} - {clinic.city}.
              </P>
              <P>
                Our privacy policy and terms &amp; conditions are subject to
                changes and revisions. So kindly review the policy periodically.
              </P>
            </Section>

            {/* TERMS AND CONDITIONS */}
            <Section id="terms-and-conditions" title="Terms and Conditions">
              <P>
                Kindly go through the terms and conditions of{" "}
                {clinic.shortName} - {clinic.city} before using website or
                mobile application or avail the services offered by us. The
                terms 'you', 'your', 'user' refers to all registered and
                unregistered using services from {clinic.shortName} -{" "}
                {clinic.city}, {clinic.city}.
              </P>

              <UL>
                <li>
                  User should be at least 17 years old or using the services
                  under the supervision of a parent or guardian, who then will
                  be the recipient of the Terms and Conditions.
                </li>
                <li>
                  The content of this application is for general purpose only
                  and is subject to change without notice. It is hereby informed
                  that all the content provided by {clinic.shortName} -{" "}
                  {clinic.city}, {clinic.city} are strictly for information
                  purpose only and must not be used as an alternate for
                  emergency medical care.
                </li>
              </UL>

              <H3>Data and Privacy</H3>
              <UL>
                <li>
                  To have access to {clinic.shortName} - {clinic.city} website
                  and mobile application, one must register in the mobile
                  application, which includes providing personal information
                  like name, contact, email id, gender, data of birth.
                </li>
                <li>
                  {clinic.shortName} - {clinic.city} have full access to
                  information provided by the user for further communication or
                  analytics. The collected information will be used only for the
                  improvement of service quality or develop better services.
                </li>
                <li>
                  {clinic.shortName} - {clinic.city} shall not, unless required
                  by law, use or share the information to external or third
                  parties.
                </li>
                <li>
                  Users are responsible for the accuracy of the information
                  provided in the website or mobile application.{" "}
                  {clinic.shortName} - {clinic.city} reserves the right to
                  discontinue the services of the user if the information
                  provided are inaccurate or incomplete or not true.
                </li>
                <li>
                  Users are requested not to share his/her credentials of the
                  website or mobile application. User is responsible to maintain
                  the confidentiality of his/her account details. User shall
                  immediately notify {clinic.shortName} - {clinic.city} for any
                  actual or suspected or unauthorized activity in his/her
                  account. However, {clinic.shortName} - {clinic.city} is not
                  liable for losses from any method of unauthorized access if
                  you lose your login credentials or otherwise compromised.
                </li>
                <li>
                  If user provides his/her access to third party, he/she is
                  responsible for all activities done by the person.{" "}
                  {clinic.shortName} - {clinic.city} is not liable for any loss
                  or compromise from the user side.
                </li>
                <li>
                  Users are required keep the profile updated in case of change
                  in mobile number or email to avail the services of website and
                  mobile application without hindrance.
                </li>
                <li>
                  Registering in the website or mobile application is a must for
                  an user to book appointment (Clinic visit or Video
                  consultation) or be updated through the notifications and
                  blogs in the mobile application. The user will able to chat
                  with Doctor only after completing his/her first appointment
                  with the Doctor.
                </li>
                <li>
                  Any update/instruction about the appointments and services
                  respectively will be notified to the user through the mobile
                  application. However, any reminder related to the procedure
                  are additional part of the service and {clinic.shortName} -{" "}
                  {clinic.city} is not liable if the reminder is undelivered or
                  delivered late for any reason despite the best efforts and
                  would request the user to keep himself/herself monitored based
                  on Doctor's instructions.
                </li>
              </UL>

              <H3>Telemedicine</H3>
              <UL>
                <li>
                  The services shall be provided to you via audio/video
                  consultation. Please ensure that you are equipped with proper
                  video conference equipment and internet connectivity as
                  mentioned. In case of inadequate video conference equipment,
                  technical error or defective internet connectivity,{" "}
                  {clinic.shortName} - {clinic.city} reserves the right to
                  reschedule or cancel your appointment.
                </li>
                <li>
                  You understand and acknowledge that there will not be any
                  physical examination involved and the consultation services
                  shall be provided through video only.
                </li>
                <li>
                  Video consultation from the doctor to subject to his/her
                  availability and confirmation or changes will be notified
                  through the mobile application.
                </li>
                <li>
                  The opinion delivered by the doctor shall solely be based on
                  the verbal communication between the concerned doctor and the
                  patient and the reports and other information provided by you
                  during the online consultation.
                </li>
                <li>
                  In case the patient misses or cancels the appointment, he/she
                  shall not be entitled to any refund.
                </li>
                <li>
                  Online consultation services of {clinic.shortName} -{" "}
                  {clinic.city} are not meant in any way for emergency
                  conditions. It is advised to take the patient to the nearest
                  hospital in such cases.
                </li>
                <li>
                  {clinic.shortName} - {clinic.city} reserve the right to ask
                  for confirmation of identification when required. Failing
                  which {clinic.shortName} - {clinic.city} have the right to
                  cancel the consultation without refund.
                </li>
                <li>
                  {clinic.shortName} - {clinic.city} reserves the rights to
                  change or revise the pricing structure at any time, without
                  prior notification.
                </li>
              </UL>

              <H3>Payments</H3>
              <UL>
                <li>
                  Online payments are done through our trusted gateway partners.{" "}
                  {clinic.shortName} - {clinic.city}, however, is not liable in
                  case of incorrect input (card details) or unauthorized access
                  from the user side.
                </li>
                <li>
                  {clinic.shortName} - {clinic.city} shall not take
                  responsibility for 1) Incomplete transaction, 2) Transaction
                  failure from user or bank side, 3) Decline due to unauthorized
                  attempt or transaction 4) Any other failure from user side.
                </li>
                <li>
                  All payment or refund related queries are handled by{" "}
                  {clinic.shortName} - {clinic.city} Support team only.{" "}
                  {clinic.shortName} - {clinic.city} is not associated with any
                  third party or external support for payment related queries.
                </li>
              </UL>

              <H3>Content and Copyrights</H3>
              <UL>
                <li>
                  All the contents in website and mobile application are
                  copyrighted {clinic.shortName} - {clinic.city} only. Any
                  sharing or copying of the same for commercial purpose will be
                  a violation of copyrights and {clinic.shortName} -{" "}
                  {clinic.city} reserves the right to take action accordingly.
                </li>
                <li>
                  Users acknowledge and agree not to share or upload the content
                  of the website or application without obtaining the permission
                  of {clinic.shortName} - {clinic.city}.
                </li>
                <li>
                  This services from {clinic.shortName} - {clinic.city} should
                  not be used in any way that can harm an individual, invade
                  another's privacy, breach laws or regulations, hinders the
                  functioning of the same.
                </li>
                <li>
                  Users agree to provide fullest co-operation to{" "}
                  {clinic.shortName} - {clinic.city} to resolve any queries or
                  issues from user or hospital side.
                </li>
                <li>
                  User agrees to not hold {clinic.shortName} - {clinic.city},
                  their representative, partners for loss, damage from user side
                  or infringement from his/her account. If notified by{" "}
                  {clinic.shortName} - {clinic.city} in such events, you agree
                  to provide complete co-operation to {clinic.shortName} -{" "}
                  {clinic.city}.
                </li>
                <li>
                  {clinic.shortName} - {clinic.city} may maintain temporary or
                  permanent cookies. User have full permission to accept or
                  refuse the usage of cookies by configuring your browser.{" "}
                  {clinic.shortName} - {clinic.city} recommend the user to
                  manage your browser configuration accordingly.
                </li>
                <li>
                  By using the services of {clinic.shortName} - {clinic.city},
                  you are bound to all the terms and conditions of{" "}
                  {clinic.shortName} - {clinic.city} and subject to our privacy
                  policy.
                </li>
                <li>
                  No term or condition will be compromised for any individual in
                  any case, unless authorized by {clinic.shortName} -{" "}
                  {clinic.city}.
                </li>
                <li>
                  {clinic.shortName} - {clinic.city} reserves the right to
                  modify or terminate any of the above terms and conditions,
                  without notice, any time.
                </li>
                <li>
                  All the terms and conditions represent an agreement between
                  the user and the {clinic.shortName} - {clinic.city}. By
                  proceeding further, you confirm that you have read, understood
                  and agree to all terms and conditions.
                </li>
              </UL>
            </Section>

            {/* CONTACT */}
            <Section title="For further queries">
              <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-ink-100 sm:flex-row sm:items-center sm:gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                    Email
                  </div>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="text-sm font-medium text-ink-800 hover:text-brand-600"
                  >
                    {clinic.email}
                  </a>
                </div>
              </div>
            </Section>
          </article>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Button to="/" variant="secondary">
              Return Home
            </Button>
            <Link
              to="/contact"
              className="btn-base text-ink-700 hover:text-brand-600"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------------------- helpers ----------------------------- */

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function H3({ children }) {
  return (
    <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink-900">
      {children}
    </h3>
  );
}

function P({ children }) {
  return <p className="text-[15px] leading-relaxed text-ink-700">{children}</p>;
}

function UL({ children }) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <ul className="ml-1 space-y-3 text-[15px] leading-relaxed text-ink-700">
      {items.map((c, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
          <span>{c?.props?.children ?? c}</span>
        </li>
      ))}
    </ul>
  );
}
