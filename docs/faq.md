# Timeplus Cloud FAQ

## Can I run Timeplus in our own cloud VPC or on-prem? {#deployment}

Certainly! [Timeplus Enterprise](timeplus-enterprise) can be installed in your local data center or cloud VPC, with similar features as Timeplus Cloud. Please [contact us](mailto:info@timeplus.com) to get more details or schedule a demo.

## How much data I can load into Timeplus Cloud? {#datasize}

For Free Trial accounts, the total storage for each workspace is 20GB by default. Please contact us if you need to load or keep more data. You can choose the storage size when you upgrade to a paid plan.

## Can I invite other members to my workspace? {#invite}

Yes, the workspace owner can invite team members to access the workspace. Go to the "Settings" and "Members" tab. An email will be sent to the members and once they log in, they will have access to all objects in the workspace. More team collaboration features and fine-grained access control are in the product roadmap.

## What's the relationship between Timeplus and Proton? {#compare}

Proton is the core engine of Timeplus and was open-sourced in September 2023. Timeplus Cloud or Timeplus Enterprise provide external features and support. Please check the [Proton FAQ](proton-faq) for details.

## What's the SLA and can I run production load? {#sla}

Timeplus Cloud went GA on August 2023, ready for production workload. There is no SLA for free trial. For the Professional tier, it's 99.5%. For the Enterprise tier, it's 99.9% or above. Please check https://timeplus.com/pricing for more details and FAQ. To monitor Timeplus Cloud health status, please visit or subscribe to https://timeplus.statuspage.io.

## What is the IP address for Timeplus Cloud so that I can allow Timeplus to access my Kafka/Redpanda/Pulsar servers {#ip}

If you maintain an IP whitelist, you'll need to whitelist our static IP:

`44.232.236.191` for us.timeplus.cloud
