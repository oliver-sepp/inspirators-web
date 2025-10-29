<script lang="ts">
  import logo from '$lib/assets/logo.png';

  const user = 'info';
  const domain = 'inspirators';
  const tld = 'eu';
  const email = `${user}@${domain}.${tld}`;
</script>

<div class="bg-white p-6 w-full text-[#05266A]">

    <div class="flex items-start mb-6">
        <img src={logo} alt="Inspirators Logo" class="h-12 w-auto">
    </div>

  <div class="flex flex-col md:flex-row md:justify-left gap-[16vw]">
    <div>
      <p>
        Inspirators! OÜ <br>
        Reg. kood: 16224196, KMKNR: EE102369555 <br>
        Mäealuse tn 2/1, <br>
        Tallinn, 12618, Estonia
      </p>
    </div>

    <div class="flex flex-col space-y-2">
      <p>Contact Us</p>
      <p>Contact Form</p>
      <a href={`mailto:${email}`} target="_blank" class="hover:underline">{email}</a>
    </div>

    <div class="flex flex-col space-y-2">
      <p>Follow Us</p>
      <a href="https://www.linkedin.com/company/inspirators-eu/" target="_blank" class="hover:underline">LinkedIn</a>
    </div>
  </div>
</div>
